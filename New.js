var last_msg = [];
var User_name = [];
var Descriptive_Reply = [];
var Customreply = [];
var promise = [];
var customessage = "";
var replysignflag = 0;
console.log("Reload");
messageflag = 0;
var custom_sign = "";
var signature1 = "";
var choices = "";
var User_input = "";
var Message1 = "";
var Customreply_msg = "";
var subject_index;
var Inbox_Message = "";
var Inbox_Message1 = "";
var replyboxmessage = "";
var replyflag = 0;
var defultmsg = "";
var flag = 0;
var forwardmessage = "";
var btn_back = document.createElement("input");
btn_back.value = "";
btn_back.id = "btn_back";
btn_back.className = "btn_back";
btn_back.type = "submit";
let reply_message = "";
var btn_back1 = document.createElement("input");
btn_back1.value = "";
btn_back1.id = "btn_back";
btn_back1.className = "btn_back1";
btn_back1.type = "submit";
var signature_len = "";
var label = document.createElement("input");
label.value = "AI_label";
label.id = "AI_label";
label.className = "AI_label";
label.type = "submit";

var signature = "";

var btn_generate = document.createElement("input");
btn_generate.value = "AI-Reply";
btn_generate.id = "btn_generate";
btn_generate.className = "btn_generate";
btn_generate.type = "submit";

var btn_re_generate = document.createElement("input");
btn_re_generate.value = "Re Generate";
btn_re_generate.id = "btn_re_generate";
btn_re_generate.className = "btn_re_generate";
btn_re_generate.type = "submit";
var signature_flag = 0;
var btn_loading1 = document.createElement("div");
btn_loading1.id = "loader1";
btn_loading1.className = "loader1";
// var a = ''
document
  .getElementsByTagName("html")[0]
  .addEventListener("click", fnreplybutton);

console.log(
  document.getElementsByClassName("T-I J-J5-Ji T-I-Js-IF aaq T-I-ax7 L3")[0]
);
function sleep1(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

if (
  document.getElementsByClassName("T-I J-J5-Ji T-I-Js-IF aaq T-I-ax7 L3")[0] ==
  "undefined"
);
{
  // a = 'T-I J-J5-Ji T-I-Js-IF aaq T-I-ax7 L3'
  fnreply();
}
function fnreplybutton(event) {
  // console.log(a);
  console.log(flag, "6464646646464646464646");
  try {
    console.log("try to fnreplybutton");
    var getClass = event.target.className;
  } catch (error) {
    console.log("catch of fnreplybutton");
    getClass = "T-I J-J5-Ji T-I-Js-IF aaq T-I-ax7 L3";
  }
  console.log("classis", getClass);

  function sleep1(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  async function demo() {
    for (let i = 0; i < 1; i++) {
      await sleep1(i * 1000);
      console.log("main", i);
    }
    try {
      document
        .getElementsByClassName("T-I J-J5-Ji T-I-Js-IF aaq T-I-ax7 L3")[0]
        .addEventListener("click", fnthreebutton);
      console.log("HEllo in try of fnreply");
    } catch (error) {}
  }
  demo();
  if (
    getClass == "ams bkH" ||
    getClass == "J-N-Jz" ||
    getClass == "ams bkI" ||
    getClass == "J-N J-N-JT" ||
    getClass == "brb" ||
    getClass ==
      "T-I J-J5-Ji T-I-Js-IF aaq T-I-ax7 L3 T-I-JW T-I-JO T-I-Zf-aw2" ||
    getClass == "T-I J-J5-Ji T-I-Js-IF aaq T-I-ax7 L3" ||
    getClass == "gE hI" ||
    getClass == "ams bkG" ||
    getClass == "J-N J-N-JT" ||
    getClass == "cj"
  ) {
    fnthreebutton();
    flag = 1;
    console.log(
      "////////////////////////////////////////////////////////////////",
      flag
    );
  }
  if (getClass == "btn_generate") {
    $(".btn_generate").hide();
    console.log(signature1);
    Message1 = "";
    Message1 = document.getElementsByClassName("a3s aiL")[0].innerText;
    console.log("message-1////////", Message1);
    try {
      User = document.getElementsByClassName("oL aDm az9")[0].innerText;
    } catch (error) {
      User = "";
    }
    User_name = [];
    User_name = User.split(" ");
    User = User_name[0];
    console.log(User_name);
    User_input = document.getElementsByClassName(
      "Am aO9 Al editable LW-avf tS-tW"
    )[0].innerText;
    User_input = User_input + " ";
    index = User_input.search(":");
    User_input = User_input.slice(index + 1, -1);
    console.log(User_input);
    if (User_input.charAt(0) == "\n") {
      User_input = User_input.slice(1);
    }
    console.log("user_input-----", User_input);
    console.log(forwardmessage);
    console.log(signature1);
    custom_sign = signature1;
    console.log(custom_sign);
    fnregenerate(Message1, User, User_input, forwardmessage, custom_sign);
  }
  if (getClass == "btn_re_generate") {
    console.log(Message1);
    console.log(User_input);
    $(".btn_back1").hide();

    fnregenerate(Message1, User, User_input, forwardmessage, signature1);
  }
  if (getClass == "btn_back1") {
    console.log(customessage);
    $(".btn_re_generate").hide();
    $(".btn_back1").hide();
    writemessage(customessage, forwardmessage);
  }
  if (getClass == "Suggestion-btn1") {
    $(".Suggestion-btn1").hide();
  }
  if (getClass == "Suggestion-btn") {
    $(".Suggestion-btn").remove();
    console.log("Suggestion-btn call");
  }
  if (getClass == "btn_back") {
    $(".btn_generate").remove();
    $(".btn_re_generate").remove();
    $(".btn_back").remove();
    $(".btn_back1").remove();
    $(".Suggestion-btn").remove();
    $(".Suggestion-btn1").remove();
    messageflag = 0;
    document.getElementsByClassName(
      "Am aO9 Al editable LW-avf tS-tW"
    )[0].innerText = "";
    document.getElementsByClassName(
      "Am aO9 Al editable LW-avf tS-tW"
    )[0].innerText = replyboxmessage;
    fnthreebutton();
  }
  if (getClass == "T-I T-I-KE L3") {
    defultmsg = "";
    fncompose(defultmsg);
  }
  if (getClass == "btn_back2") {
  }
  if (getClass == "og T-I-J3") {
    fndelete();
  }
  if (getClass == "oh J-Z-I J-J5-Ji T-I-ax7") {
    flag = 0;
  }
  function fncomposemail(Inbox_Message, signature) {
    Inbox_Message1 = "";
    Inbox_Message1 = Inbox_Message;
    console.log(
      "/////////////////////////////////////////////////////",
      signature
    );
    // Inbox_Message1 = Inbox_Message;
    console.log(Inbox_Message1);
    promise = [];
    const settings = {
      url: "https://api.openai.com/v1/completions",
      method: "POST",
      timeout: 0,
      headers: {
        Authorization:
          "Bearer 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",
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        prompt:
          'INSTRUCTION: Rewrite and extend the INPUT into a professional sophisticated style email using complicated grammar, including greeting, do not miss any key points,include good wishes. and body do not include a signature.\n\nInput:\n"' +
          Inbox_Message1 +
          '"\n\nOutput:\n',
        temperature: 0.65,
        max_tokens: 400,
        top_p: 1,
        presence_penalty: 0,
        frequency_penalty: 0,
        best_of: 3,
        model: "text-davinci-003",
      }),
    };
    promise.push($.ajax(settings));
    $.when.apply(null, promise).done(function () {
      $(".loader2").hide();
      var desp = promise[0].responseJSON.choices[0].text + "\n";
      console.log("desp///////////////", desp);
      var subjectend_index;
      var subject_index = desp.search("Subject");
      if (subject_index != -1) {
        subject_index = desp.search(":");
      }
      console.log(subject_index);
      var sign = desp.search("Thanks,\n");
      var sign1 = desp.search("Sincerely,\n");
      var sign2 = desp.search("Regards,\n");
      var sign3 = desp.search("Thank You,\n");
      console.log(signature);
      if (signature != "") {
        console.log(signature);
        if (sign != -1) {
          desp = desp.slice(0, sign);
        } else if (sign1 != -1) {
          desp = desp.slice(0, sign1);
        } else if (sign2 != -1) {
          desp = desp.slice(0, sign2);
        } else if (sign3 != -1) {
          desp = desp.slice(0, sign3);
        } else {
          desp = desp;
        }
      }
      var subject_title;
      var mail_body;
      console.log(subject_index);
      if (subject_index == -1) {
        if (flag == 1) {
          document.getElementsByClassName(
            "Am Al editable LW-avf tS-tW"
          )[1].innerText = desp + signature;
        } else {
          document.getElementsByClassName(
            "Am Al editable LW-avf tS-tW"
          )[0].innerText = desp + signature;
        }
      } else {
        if (flag == 1) {
          subjectend_index = desp.search("\n\n");
          subject_title = desp
            .slice(subject_index + 1, subjectend_index)
            .trim();
          mail_body = desp.slice(subjectend_index + 1);
          document.getElementsByClassName("aoT")[1].value = subject_title;
          document.getElementsByClassName(
            "Am Al editable LW-avf tS-tW"
          )[1].innerText = mail_body + signature;
        } else {
          console.log(desp);
          subjectend_index = desp.search("\n\n");
          subject_title = desp
            .slice(subject_index + 1, subjectend_index)
            .trim();
          mail_body = desp.slice(subjectend_index + 1);
          document.getElementsByClassName("aoT")[0].value = subject_title;
          document.getElementsByClassName(
            "Am Al editable LW-avf tS-tW"
          )[0].innerText = mail_body + signature;
        }
      }

      $(".btn_AI_re_compose").show();
      $(".btn_back2").show();
      document
        .getElementsByClassName("btn_back2")[0]
        .addEventListener("click", function () {
          $(".btn_AI_re_compose").remove();
          $(".btn_back2").remove();
          $(".btn_AI_compose").remove();
          $(".loader2").remove();
          Inbox_Message = "";
          console.log("/////////////////////////", defultmsg);
          console.log("/////////////////////////", signature);
          signature_flag = 1;
          document.getElementsByClassName("aoT")[0].value = "";
          fncompose(defultmsg, signature);
        });
      document
        .getElementsByClassName("btn_AI_re_compose")[0]
        .addEventListener("click", function () {
          $(".loader2").show();
          console.log(Inbox_Message1);
          console.log(signature);
          fncomposemail(Inbox_Message1, signature);
          $(".btn_AI_re_compose").hide();
          $(".btn_back2").hide();
        });
    });
  }
  function fncompose(defultmsg, signature) {
    function sleep1(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    async function demo1() {
      for (let i = 0; i < 1; i++) {
        await sleep1(i * 2000);
        console.log("main", i);
      }
      try {
        console.log("/////////////////", signature_flag);
        console.log("//////////////////////////", defultmsg);
        if (defultmsg == undefined) {
          defultmsg = "";
        }
        try {
          $(".btn_AI_re_compose").remove();
          $(".btn_back2").remove();
          $(".btn_AI_compose").remove();
          $(".loader2").remove();
          $(".btn_AI_compose").remove();
        } catch {}
        console.log("Create a button ====>open compose mail");
        var btn_AI_re_compose = document.createElement("input");
        btn_AI_re_compose.value = "";
        btn_AI_re_compose.id = "btn_AI_re_compose";
        btn_AI_re_compose.className = "btn_AI_re_compose";
        btn_AI_re_compose.type = "submit";
        // btn_AI_re_compose.innerHTML ='<i class="fa-solid fa-rotate-left"></i>'
        // btn_AI_re_compose.innerHTML ='<h1>re</h1>'

        var btn_AI_compose = document.createElement("input");
        btn_AI_compose.value = "";
        btn_AI_compose.id = "btn_AI_compose";
        btn_AI_compose.className = "btn_AI_compose";
        btn_AI_compose.type = "submit";

        var btn_back2 = document.createElement("input");
        btn_back2.value = "";
        btn_back2.id = "btn_back2";
        btn_back2.className = "btn_back2";
        btn_back2.type = "submit";

        var btn_loading2 = document.createElement("div");
        btn_loading2.id = "loader2";
        btn_loading2.className = "loader2";

        console.log("hello====>open compose mail");

        if (flag == 1) {
          if (signature_flag == 0) {
            try {
              signature =
                document.getElementsByClassName("gmail_signature")[0].innerText;
            } catch {
              signature = "";
            }
          } else {
            signature = signature;
          }
          console.log(signature);
          document.getElementsByClassName(
            "Am Al editable LW-avf tS-tW"
          )[1].innerText =
            "Please write brief key points that you want to include in the AI-generated reply for drafting mail:\n" +
            defultmsg +
            "\n\n" +
            signature;
          document.querySelectorAll(".btC")[1].appendChild(btn_AI_compose);
          document.querySelectorAll(".btC")[1].appendChild(btn_AI_re_compose);
          document.querySelectorAll(".btC")[1].appendChild(btn_back2);
          document.querySelectorAll(".btC")[1].appendChild(btn_loading2);
        } else {
          if (signature_flag == 0) {
            try {
              signature =
                document.getElementsByClassName("gmail_signature")[0].innerText;
            } catch {
              signature = "";
            }
          } else {
            signature = signature;
          }
          console.log(signature);
          document.getElementsByClassName(
            "Am Al editable LW-avf tS-tW"
          )[0].innerText =
            "Please write brief key points that you want to include in the AI-generated reply for drafting mail:\n" +
            defultmsg +
            "\n\n\n\n" +
            signature;
          document.querySelectorAll(".btC")[0].appendChild(btn_AI_compose);
          document.querySelectorAll(".btC")[0].appendChild(btn_AI_re_compose);
          document.querySelectorAll(".btC")[0].appendChild(btn_back2);
          document.querySelectorAll(".btC")[0].appendChild(btn_loading2);
        }
        $(".btn_AI_re_compose").hide();
        $(".btn_AI_compose").hide();
        $(".btn_back2").hide();
        $(".btn_AI_compose").show();
        $(".loader2").hide();
        document
          .getElementsByClassName("btn_AI_compose")[0]
          .addEventListener("click", function () {
            console.log("hello===>");
            $(".btn_AI_compose").hide();
            $(".loader2").show();
            if (flag == 1) {
              var Inbox_Message = document.getElementsByClassName(
                "Am Al editable LW-avf tS-tW"
              )[1].innerText;
            } else {
              var Inbox_Message = document.getElementsByClassName(
                "Am Al editable LW-avf tS-tW"
              )[0].innerText;
            }
            console.log(Inbox_Message);
            Inbox_Message = Inbox_Message + " ";
            index = Inbox_Message.search(":");
            console.log(signature);
            if (signature == "") {
              Inbox_Message = Inbox_Message.slice(index + 1);
            } else {
              signature_len = Inbox_Message.search(signature);
              Inbox_Message = Inbox_Message.slice(index + 1, signature_len);
            }
            if (Inbox_Message.charAt(0) == "\n") {
              Inbox_Message = Inbox_Message.slice(1);
            }
            fngeneratemail(Inbox_Message, signature);
          });
      } catch (error) {
        fncompose(defultmsg);
      }
    }
    demo1();
  }
  function fngeneratemail(Inbox_Message, signature) {
    defultmsg = Inbox_Message;
    console.log(Inbox_Message);
    console.log(signature);
    console.log(defultmsg);
    fncomposemail(defultmsg, signature);
  }
  function fnthreebutton() {
    // This is function for the make first Three button which is Summarise, AI-Reply, Custom-AI Reply and give them class
    var threebutton = ["Summarise", "AI-Reply", "Custom AI Reply"];
    function sleep1(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    async function demo() {
      for (let i = 0; i < 1; i++) {
        await sleep1(i * 500);
        console.log("main", i);
      }
      try {
        replyboxmessage = document.getElementsByClassName(
          "Am aO9 Al editable LW-avf tS-tW"
        )[0].innerText;
        console.log(replyboxmessage);
        try {
          $(".Suggestion-btn1").remove();
        } catch (error) {}
        for (let j = 0; j < 3; j++) {
          threebtn = "btn" + j.toString();
          var threebtn = document.createElement("input");
          threebtn.value = threebutton[j];
          threebtn.id = threebutton[j];
          threebtn.className = "Suggestion-btn1";
          threebtn.type = "submit";
          document.querySelector(".J-J5-Ji.bty").appendChild(threebtn);
        }
        document.querySelector(".J-J5-Ji.bty").appendChild(btn_back);
        document.querySelector(".J-J5-Ji.bty").appendChild(btn_back1);
        document.querySelector(".J-J5-Ji.bty").appendChild(btn_generate);
        document.querySelector(".J-J5-Ji.bty").appendChild(btn_re_generate);
        $(".btn_generate").hide();
        $(".btn_re_generate").hide();
        $(".btn_back").hide();
        $(".btn_back1").hide();
        document
          .getElementsByClassName("Suggestion-btn1")[0]
          .addEventListener("click", fnsummarise);
        document
          .getElementsByClassName("Suggestion-btn1")[1]
          .addEventListener("click", fnAIAssistReply);
        document
          .getElementsByClassName("Suggestion-btn1")[2]
          .addEventListener("click", fncustomReply);
        document
          .getElementsByClassName("og T-I-J3")[0]
          .addEventListener("click", fndelete);
        if (replysignflag == 0) {
          try {
            signature1 =
              document.getElementsByClassName("gmail_signature")[0].innerText;
            replysignflag = 1;
            console.log(
              ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",
              replysignflag
            );
          } catch (error) {
            console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> catch");
            signature1 = "";
            console.log(
              ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",
              replysignflag
            );
          }
        } else {
          signature1 = signature1;
        }
        console.log(signature1);
      } catch (error) {
        fnthreebutton();
      }
    }
    demo();
  }
  function fndelete() {
    flag = 0;
    signature_flag = 0;
    replysignflag = 0;
    messageflag = 0;
  }
  // This is function for the summarise
  function fnsummarise() {
    console.log(replyboxmessage);
    $(".Suggestion-btn1").remove();
    var Message = document.getElementsByClassName("a3s aiL")[0].innerText;
    try {
      User = document.getElementsByClassName("oL aDm az9")[0].innerText;
    } catch (error) {
      User = "XYZ";
    }
    User_name = [];
    User_name = User.split(" ");
    console.log(User_name);
    User = User_name[0];
    function sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    async function demo() {
      for (let i = 0; i < 1; i++) {
        await sleep(i * 1000);
      }
      console.log("Start the loader");
      document.querySelector(".J-J5-Ji.bty").appendChild(btn_loading1);
      console.log("end the loader");
      Descriptive_Reply = [];
      const settings = {
        url: "https://api.openai.com/v1/completions",
        method: "POST",
        timeout: 0,
        headers: {
          Authorization:
            "Bearer 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",
          "Content-Type": "application/json",
        },
        data: JSON.stringify({
          prompt:
            "Extract key points from the Email.\n" + Message + "\nkey points:",
          temperature: 0.3,
          max_tokens: 256,
          top_p: 1,
          presence_penalty: 0,
          frequency_penalty: 0.3,
          model: "text-davinci-003",
        }),
      };
      Descriptive_Reply.push($.ajax(settings));
      $.when.apply(null, Descriptive_Reply).done(function () {
        $("#loader1").remove();
        choices = "";
        // Descriptive_Reply is a array and it is store a GTP-3 Reply
        choices = Descriptive_Reply[0].responseJSON.choices[0].text;
        console.log(choices);
        reply_message = "This is a summary of the email:\n" + choices;
        document.getElementsByClassName(
          "Am aO9 Al editable LW-avf tS-tW"
        )[0].innerText = reply_message + "\n" + replyboxmessage;
        // This Satement use for the when use click on the delete button then resert a our function
        // document.getElementsByClassName("oh J-Z-I J-J5-Ji T-I-ax7")[0].addEventListener("click", fnreplybutton);
        $(".btn_back").show();
        // document.getElementsByClassName("btn_back")[0].addEventListener("click", fnthreebutton);
      });
    }
    demo();
  }
  function writemessage(customessage, forwardmessage, signature1) {
    document.getElementsByClassName(
      "Am Al editable LW-avf tS-tW"
    )[0].innerText =
      "Please write brief details/Key points that you want to include in the AI-generated reply:\n\n" +
      customessage;

    $(".btn_back").show();
    $(".btn_generate").show();
  }
  function fncustomReply() {
    $(".Suggestion-btn1").remove();
    function sleep1(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    async function demo() {
      for (let i = 0; i < 1; i++) {
        await sleep1(i * 500);
        console.log(i);
      }
      try {
        forwardmessage =
          document.getElementsByClassName("gmail_quote")[0].innerHTML;
      } catch (error) {
        forwardmessage = "";
      }
      customessage = User_input;
      console.log(signature1);
      // document.getElementsByClassName('Am Al editable LW-avf tS-tW')[0].innerText = ""
      writemessage(customessage, forwardmessage, signature1);
      // fncustomReply()
    }
    demo();
  }
  function fnregenerate(Message1, User_name, User_input, signature1) {
    function sleep1(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    async function demo() {
      for (let i = 0; i < 1; i++) {
        await sleep1(i * 500);
        console.log("==>", i);
      }
      $(".btn_generate").hide();
      $(".btn_re_generate").hide();
      $(".btn_back").hide();
      console.log(custom_sign);
      customessage = User_input;
      document.querySelector(".J-J5-Ji.bty").appendChild(btn_loading1);
      $.ajax({
        url: "https://api.openai.com/v1/completions",
        method: "POST",
        timeout: 0,
        headers: {
          Authorization:
            "Bearer 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",
          "Content-Type": "application/json",
        },
        data: JSON.stringify({
          prompt:
            Message1 +
            "\n\nInstruction:" +
            User_name +
            " has sent the above email to me. Write a reply email in detail to " +
            User_name +
            ' for the given Input with a professional writing style including a subject line, a salutation and a body do not include a signature.\nInput:\n"' +
            User_input +
            '"\n****\n',
          temperature: 0.65,
          max_tokens: 400,
          top_p: 1,
          presence_penalty: 0,
          frequency_penalty: 0,
          model: "text-davinci-003",
        }),
        success: function (data) {
          $(".loader1").remove();
          $(".btn_back1").show();

          Customreply_msg = "";

          Customreply_msg = data.choices[0].text;
          var sign = Customreply_msg.search("Thanks,\n");
          var sign1 = Customreply_msg.search("Sincerely,\n");
          var sign4 = Customreply_msg.search("Sincerely,");
          var sign2 = Customreply_msg.search("Regards,\n");
          var sign3 = Customreply_msg.search("Thank You,\n");
          var sign5 = Customreply_msg.search("Best Regards,\n");
          var sign6 = Customreply_msg.search("Kind regards,\n");
          var sign7 = Customreply_msg.search("Best,\n");
          var sign8 = Customreply_msg.search("Best regards,\n");
          var sign9 = Customreply_msg.search("Thank you for your help,\n");
          var sign10 = Customreply_msg.search("Thanks again,\n");

          console.log(sign1);
          console.log(signature1);
          console.log(replysignflag);
          if (replysignflag == 1) {
            if (sign != -1) {
              Customreply_msg = Customreply_msg.slice(0, sign);
            }
            if (sign1 != -1) {
              Customreply_msg = Customreply_msg.slice(0, sign1);
            }
            if (sign2 != -1) {
              Customreply_msg = Customreply_msg.slice(0, sign2);
            }
            if (sign3 != -1) {
              Customreply_msg = Customreply_msg.slice(0, sign3);
            }
            if (sign4 != -1) {
              Customreply_msg = Customreply_msg.slice(0, sign4);
            }
            if (sign5 != -1) {
              Customreply_msg = Customreply_msg.slice(0, sign5);
            }
            if (sign6 != -1) {
              Customreply_msg = Customreply_msg.slice(0, sign6);
            }
            if (sign7 != -1) {
              Customreply_msg = Customreply_msg.slice(0, sign7);
            }
            if (sign8 != -1) {
              Customreply_msg = Customreply_msg.slice(0, sign8);
            }
            if (sign9 != -1) {
              Customreply_msg = Customreply_msg.slice(0, sign9);
            }
            if (sign10 != -1) {
              Customreply_msg = Customreply_msg.slice(0, sign10);
            }
            // else {
            //     Customreply_msg = Customreply_msg
            // }
          }
          // try {
          //     document.getElementsByClassName("gmail_signature")[0].innerText = ""
          // } catch (error) { }
          document.getElementsByClassName(
            "Am Al editable LW-avf tS-tW"
          )[0].innerText = Customreply_msg + "\n" + custom_sign;
          $(".btn_re_generate").show();
          // $("#btn_re_generate").click(function () {
          //     fnregenerate(Message1, User_name, User_input)
          // })
        },
        error: function () {
          console.log("error");
          setResponse("Internal Server Error");
          fncustomReply();
        },
      });
    }
    demo();
  }
  // This is function for the AI Assist Reply
  function fnAIAssistReply() {
    console.log(signature1);
    replyflag += 1;
    // To Generate Ai reply Please click on any of the positive negitive or nutural Reply
    $(".Suggestion-btn1").remove();
    button_msg = ["Positive", "Negative", "Neutral"];
    function sleep1(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    async function demo() {
      for (let i = 0; i < 1; i++) {
        await sleep1(i * 500);
        console.log(i);
      }
      try {
        if (messageflag == 0) {
          if (replysignflag == 0) {
            reply_message =
              "Please click on Positive, Negative, or Neutral to generate an AI-based response.\n";
            document.getElementsByClassName(
              "Am aO9 Al editable LW-avf tS-tW"
            )[0].innerText = reply_message;
          } else {
            reply_message =
              "Please click on Positive, Negative, or Neutral to generate an AI-based response.\n\n" +
              signature1;
            document.getElementsByClassName(
              "Am aO9 Al editable LW-avf tS-tW"
            )[0].innerText = reply_message;
          }
        }

        for (let j = 0; j < 3; j++) {
          btn_name = "btn" + j.toString();
          var btn_name = document.createElement("input");
          btn_name.value = button_msg[j];
          btn_name.id = button_msg[j];
          btn_name.className = "Suggestion-btn";
          btn_name.type = "submit";
          document.querySelector(".J-J5-Ji.bty").appendChild(btn_name);
        }

        document
          .getElementsByClassName("oh J-Z-I J-J5-Ji T-I-ax7")[0]
          .addEventListener("click", fnreplybutton);
        $(".btn_back").show();
        document
          .getElementsByClassName("og T-I-J3")[0]
          .addEventListener("click", fndelete);
        // document.getElementsByClassName("btn_back")[0].addEventListener("click", function () {
        //     $(".Suggestion-btn").remove();
        //     $(".Suggestion-btn1").remove();
        //     fnthreebutton();
        // });\

        for (let i = 0; i < 3; i++) {
          console.log("call function");
          document
            .getElementsByClassName("Suggestion-btn")
            [i].addEventListener("click", function () {
              document.querySelector(".J-J5-Ji.bty").appendChild(btn_loading1);

              console.log(button_msg[i]);
              $(".btn_back").hide();

              $(".Suggestion-btn").remove();
              // if (replyflag != 1) {
              var Message =
                document.getElementsByClassName("a3s aiL")[0].innerText;
              // }

              try {
                User =
                  document.getElementsByClassName("oL aDm az9")[0].innerText;
              } catch (error) {
                User = "XYZ";
              }
              User_name = [];
              User_name = User.split(" ");
              console.log(User_name);
              console.log(Message);
              User = User_name[0];
              last_msg = [];
              console.log(User);
              const settings = {
                url: "https://api.openai.com/v1/completions",
                method: "POST",
                timeout: 0,
                headers: {
                  Authorization:
                    "Bearer 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",
                  "Content-Type": "application/json",
                },
                data: JSON.stringify({
                  prompt:
                    Message +
                    "\n\nInstruction: " +
                    User +
                    " has sent the above email to me. Write a " +
                    button_msg[i] +
                    " email reply to " +
                    User +
                    " with a professional sophisticated writing style including a salutation, and a body does not include a signature. The reply email should be very detailed about each point.\n****\n",
                  temperature: 0.7,
                  max_tokens: 400,
                  top_p: 1,
                  presence_penalty: 0,
                  frequency_penalty: 0,
                  model: "text-davinci-003",
                }),
              };

              last_msg.push($.ajax(settings));
              $.when.apply(null, last_msg).done(function () {
                $(".loader1").remove();
                var msg = last_msg[0].responseJSON.choices[0].text;
                var sign = msg.search("Thanks,\n");
                var sign1 = msg.search("Sincerely,\n");
                var sign4 = msg.search("Sincerely,");
                var sign2 = msg.search("Regards,\n");
                var sign3 = msg.search("Thank You,\n");
                var sign5 = msg.search("Best Regards,\n");
                var sign6 = msg.search("Kind regards,\n");
                var sign7 = msg.search("Best,\n");
                var sign8 = msg.search("Best regards,\n");
                var sign9 = msg.search("Thank you for your help,\n");
                var sign10 = msg.search("Thanks again,\n");
                console.log(sign1);
                console.log(typeof replysignflag, replysignflag);
                if (replysignflag == 1) {
                  console.log(signature);
                  if (sign != -1) {
                    msg = msg.slice(0, sign);
                  }
                  if (sign1 != -1) {
                    msg = msg.slice(0, sign1);
                  }
                  if (sign2 != -1) {
                    msg = msg.slice(0, sign2);
                  }
                  if (sign3 != -1) {
                    msg = msg.slice(0, sign3);
                  }
                  if (sign4 != -1) {
                    msg = msg.slice(0, sign4);
                  }
                  if (sign5 != -1) {
                    msg = msg.slice(0, sign5);
                  }
                  if (sign6 != -1) {
                    msg = msg.slice(0, sign6);
                  }
                  if (sign7 != -1) {
                    msg = msg.slice(0, sign7);
                  }
                  if (sign8 != -1) {
                    msg = msg.slice(0, sign8);
                  }
                  if (sign9 != -1) {
                    msg = msg.slice(0, sign9);
                  }
                  if (sign10 != -1) {
                    msg = msg.slice(0, sign10);
                  }
                  // else {
                  //     msg = msg
                  // }
                }
                document.getElementsByClassName(
                  "Am Al editable LW-avf tS-tW"
                )[0].innerText = "";
                document.getElementsByClassName(
                  "Am Al editable LW-avf tS-tW"
                )[0].innerText = msg + "\n" + replyboxmessage;
                messageflag = 1;
                document
                  .getElementsByClassName("og T-I-J3")[0]
                  .addEventListener("click", fndelete);
                fnAIAssistReply();
                // document.getElementsByClassName("oh J-Z-I J-J5-Ji T-I-ax7")[0].addEventListener("click", fnreplybutton);
              });
            });
        }
      } catch (error) {
        fnAIAssistReply();
      }
    }
    demo();
  }
  fnreply();
}
var count = 15;
function fnreply() {
  function sleep1(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  async function demo() {
    for (let i = 0; i < 2; i++) {
      await sleep1(i * 1000);
    }
    try {
      document
        .getElementsByClassName("T-I J-J5-Ji T-I-Js-IF aaq T-I-ax7 L3")[0]
        .addEventListener("click", fnreplybutton);
    } catch (error) {
      if (count != 0) {
        fnreply();
        count--;
      }
    }
  }
  demo();
}
