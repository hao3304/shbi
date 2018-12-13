<template>
  <div>
    <Table :loading="loading" :columns="columns" :data="data"></Table>
    <div style="text-align: right;padding:10px 0">
      <Page
        :total="total"
        @on-change="onCurrentChange"
        :page-size="form.size"
        :current.sync="form.page"
      ></Page>
    </div>
  </div>
</template>
<script>
import { searchRecord } from "@/module/service";
export default {
  props: {
    email: {
      type: String,
      default: ""
    },
    date: {
      type: Array,
      default: () => []
    }
  },
  name: "Receive",
  data() {
    return {
      columns: [
        {
          title: "#",
          width: 60,
          render: (h, { row }) => {
            return h("span", row.index + (row.page - 1) * 20 + 1);
          }
        },
        {
          title: "邮件ID",
          key: "messageId"
        },
        {
          title: "对方地址",
          key: "toAddr"
        },
        {
          title: "发件时间",
          render: (h, { row }) => {
            return h(
              "span",
              new Date(row.timestamp * 1000 + 8 * 3600 * 1000).Format(
                "yyyy-MM-dd hh:mm:ss"
              )
            );
          }
        },
        {
          title: "发件IP",
          render: (h, { row }) => {
            return h("span", row.ipAddr);
          }
        },
        {
          title: "邮件大小(KB)",
          key: "mailSize",
          render: (h, { row }) => {
            return h("span", (row.mailSize / 1000).toFixed(2));
          }
        }
      ],
      loading: false,
      data: [],
      total: 0,
      form: {
        page: 1,
        fromAddr: "",
        begin: undefined,
        end: undefined
      },
      height: document.documentElement.clientHeight
    };
  },
  methods: {
    render() {
      this.init();
      this.getData();
    },
    init() {
      this.form = {
        page: 1,
        fromAddr: "",
        begin: undefined,
        end: undefined
      };
    },
    onCurrentChange(page) {
      this.form.page = page;
      this.getData();
    },
    getData() {
      this.loading = true;
      if (this.email) {
        this.form.fromAddr = this.email;
      }
      if (this.date) {
        let date = this.getDate(this.date);
        if (date[0] != 0 && date[1] != 0) {
          this.form["begin"] = date[0] - 8 * 3600;
          this.form["end"] = date[1] - 8 * 3600;
        }
      }

      searchRecord(this.form).then(rep => {
        let data = rep.data;
        this.total = data.count;
        this.data = data.data.map((d, index) => {
          d.index = index;
          d.page = this.form.page;
          return d;
        });
        this.loading = false;
      });
    },
    getDate(d) {
      if (d.length == 2) {
        return [d[0].valueOf() / 1000, d[1].valueOf() / 1000];
      } else {
        return [];
      }
    }
  }
};
</script>

<style scoped></style>
