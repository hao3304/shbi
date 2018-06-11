export default {
  modes:[
    // {name:'全部',value:'all'},
    // {name:'正常接收邮件数量', value:'mx AND "client=" AND "postfix/smtpd" NOT "NOQUEUE"'},
    // {name:'拒收邮件数量', value:'mx AND "client=" AND "postfix/smtpd" AND "NOQUEUE"'},
    // {name:'被梭子鱼黑名单拦截的邮件数量', value:'"Client host blocked using Barracuda Reputation" AND mx'},
    // {name:'交大用户通过客户端发送的邮件数量', value:'sasl_username AND (proxy01 OR proxy08)'},
    // {name:'交大用户通过webmail发送邮件数量', value:'(mta01 OR mta03) AND "postfix/smtpd" AND  {mailstore01 TO mailstore22} AND "client="'},
    // {name:'正常接收清华大学的邮件', value:'mx AND ".tsinghua.edu.cn" AND "postfix/smtpd" AND "client=" AND {smtp01 TO smtp99} NOT "NOQUEUE"'},
    // {name:'拒收清华大学的邮件', value:'mx AND ".tsinghua.edu.cn" AND "postfix/smtpd" AND "client=" AND {smtp01 TO smtp99} AND "NOQUEUE"'},
    // {name:'正常接收北京大学的邮件', value:'mx AND ".pku.edu.cn" AND "postfix/smtpd" AND "client=" AND {mx01 TO mx99} NOT "NOQUEUE"'},
    // {name:'拒收北京大学的邮件', value:'mx AND ".pku.edu.cn" AND "postfix/smtpd" AND "client=" AND {mx01 TO mx99} AND "NOQUEUE"'},
    // {name:'正常接收复旦大学的邮件', value:'mx AND "client=mail.fudan.edu.cn" AND "postfix/smtpd" NOT "NOQUEUE"'},
    // {name:'拒收复旦大学的邮件', value:'mx AND "client=mail.fudan.edu.cn" AND "postfix/smtpd" AND "NOQUEUE"'},
    // {name:'正常接收浙江大学的邮件', value:'mx AND "client=spam.zju.edu.cn" AND "postfix/smtpd" NOT "NOQUEUE"'},
    // {name:'拒收浙江大学的邮件', value:'mx AND "client=spam.zju.edu.cn" AND "postfix/smtpd" AND "NOQUEUE"'},
    // {name:'正常接收中科大的邮件', value:'mx AND ".ustc.edu.cn" AND "postfix/smtpd"  AND "client=" AND {smtp1 TO smtp99} NOT "NOQUEUE"'},
    // {name:'拒收中科大的邮件', value:'mx AND ".ustc.edu.cn" AND "postfix/smtpd"  AND "client=" AND {smtp1 TO smtp99} AND "NOQUEUE"'},
    // {name:'正常接收西安交通大学的邮件', value:'mx AND "client=mail.xjtu.edu.cn" AND "postfix/smtpd" NOT "NOQUEUE"'},
    // {name:'拒收西安交通大学的邮件', value:'mx AND "client=mail.xjtu.edu.cn" AND "postfix/smtpd" AND "NOQUEUE"'},
    // {name:'正常接收哈尔滨工程大学的邮件', value:'mx AND "client=mail.hit.edu.cn" AND "postfix/smtpd" NOT "NOQUEUE"'},
    // {name:'拒收哈尔滨工程大学的邮件', value:'mx AND "client=mail.hit.edu.cn" AND "postfix/smtpd" AND "NOQUEUE"'}
  ],
  login:false,
  token:'',
  admin:false,
  userId:'',
  username:''
}
