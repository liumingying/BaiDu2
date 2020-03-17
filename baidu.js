var user = document.querySelector('#user'),//获取用户名
    number= document.querySelector('#number'),//获取手机号
    password = document.querySelector('#password'),//获取密码
    code = document.querySelector('#code'),//获取验证码
    getCode = document.querySelector('#getCode'),//发送验证码
    items = document.querySelectorAll(".item_"),//获取所有提示文段的下标
    register = document.querySelector('#register'),//注册
    acho = document.querySelector("#choose");
    var test0 = false, test1 = false, test2 = false, test3 = false;

    //用户名
    user.onfocus = function (){
        // items[0].innerHTML = "";
        // alert("设置后不可更改<br>中英文均可，最长14个英文或7个汉字");
        items[0].innerHTML = "设置后不可更改<br>中英文均可，最长14个英文或7个汉字";
        // items[0].style.color = "red";
    }
    user.onblur = function(){
        // 去除多余的空白字符
        var uname = this.value.trim();
        if(uname == ""){
            items[0].innerHTML ="用户名不允许为空"
            items[0].style.color = "red";
            return;
        }
        // 判断是否有非法字符(除了中英文、数字、下划线以外的字符)
        // var charReg = /^[a-zA-Z0-9_/u4e00-/u9fa5]+$/;
        var charReg = /^[a-zA-Z0-9_]*$/;
        var res = charReg.test(uname);
        if(!res){
            // 如果res为真，表示有非法字符
            items[0].innerHTML = '用户名仅支持中英文、数字和下划线,且不能为纯数字';
            items[0].style.color = "red";
            return ;
        }
         // 经过上述判断后，说明都是合法的字符(中英文、下划线、数字)，接下来判断是否为纯数字
         var numReg = /\D/;
         var res = numReg.test(uname);
        if(!res){
            items[0].innerHTML = '用户名仅支持中英文、数字和下划线,且不能为纯数字';
            items[0].style.color = "red";
            return;
        }
         var len = 0; //表示用户名长度
            for (var i = 0;i<uname.length ;i++){
            //如果是中文就+2，否则+1
            if(/[\xa1-\xffA-Za-z]/.test(uname[i])) {
                len += 2;
            }else{
                len += 1;
            }
            // 尽量避免执行过多的次数，一旦len超过14就不满足条件了
            if (len >14){
                break;
            }
            }
            //判断是否满足条件
            if(len > 14){
                items[0].innerHTML = "用户名不能超过7个汉字或14个字符";
                items[0].style.color = "red";
                return;
            }else{
                items[0].innerHTML= "";
                test0 = true;
            }
    }

    //电话号码
    number.onblur = function(){
        var reg = /^\d{11}$/;
        if(!reg.exec(number.value)){
            items[1].innerHTML = "手机号码格式不正确";
            items[1].style.color = "red";
        }else{
            items[1].innerHTML= "";
            test1 = true;
        }
    };
    //密码
    password.onfocus = function(){
        items[2].innerHTML ="长度为8-14个字符<br>字母/数字以及标点符号至少包含2种<br>不允许有空格、中文"
    }
    password.onblur = function(){
        var upass = this.value.trim();
        var reg = /(?!.*\s)(?!^[\u4e00-\u9fa5]+$)(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{8,14}$/;
        var res = reg.test(upass);
        if(!res){
            items[2].innerHTML = "密码设置不符合要求";
            items[2].style.color = "red";
        }else{
            items[2].innerHTML= "";
            test2 = true;
        }
    }
    //验证码
    var countDown = 60;//设置初始值
    function setTime(val){
        if(countDown == 0 ){
            val.removeAttribute("diabled");
            val.value = "获取验证码";
            countDown = 60;
            items[3].innerHTML = "请求超时，请稍后再试";
            items[3].style.color = "red";
        }else{
            val.setAttribute("disabled",true);
            val.value = "重新发送("+countDown+")";
            countDown -- ;
        }
        //设置一个定时器，每秒刷新一次
        setTimeout(function(){
            setTime(val);
        },1000)
    }
    //提交
    register.onclick = function (){
        if (aCho.checked == true || test1 == true || test2 == true || test3 == true ){
            alert("注册成功");
        }
    }




    


    