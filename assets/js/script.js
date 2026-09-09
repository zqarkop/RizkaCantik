
$(document).ready(function () {  
  $("#firstModal").modal("show");
  $("#buttonInit").click(function () {
      $("#firstModal").modal("hide");
      myAudio(1, true);
    });
    function myAudio(a, b) {
      var initAudio = $("#initAudio")[0];
      var bgm = $("#bgm")[0];
      if (a == "loop" && b == true && initAudio.paused) {
        $(initAudio).on("ended", function () {
          bgm.play();
        });
        $(bgm).on("ended", function () {
          initAudio.play();
        });
        initAudio.play();
      } else {
        initAudio.pause();
      }
      if (a == 1 && b == true && initAudio.paused) {
        initAudio.play();
      } else {
        initAudio.pause();
      }
      if (a == 2 && b == true && bgm.paused) {
        bgm.play();
      } else {
        bgm.pause();
      }
    }
  var _0x1e65=["\x74\x65\x78\x74","\x63\x69\x74\x65\x20\x61","\x68\x72\x65\x66","\x61\x74\x74\x72","\x4D\x69\x66\x74\x61\x6B\x68\x75\x64\x64\x69\x6E\x20\x46\x61\x6C\x61\x6B\x69","\x68\x74\x74\x70\x3A\x2F\x2F\x67\x69\x74\x68\x75\x62\x2E\x63\x6F\x6D\x2F\x6B\x69\x6B\x75\x6B\x65\x69\x69","\x65\x6D\x70\x74\x79","\x62\x6F\x64\x79"];var text=$(_0x1e65[1])[_0x1e65[0]]();var href=$(_0x1e65[1])[_0x1e65[3]](_0x1e65[2]);if(text!== _0x1e65[4]|| href!== _0x1e65[5]){$(_0x1e65[7])[_0x1e65[6]]()}
    videojs(document.getElementById("myVideo"), {}, function () {
      this.on("ended", function () {
        // Video selesai, lakukan sesuatu jika diperlukan
        $("#videoModal").modal("hide");
        $(".home").show();
        myAudio(2, true);
      })
    });
    function getRandomPosition() {
      const maxWidth = window.innerWidth - 340; // Lebar layar dikurangi lebar card (300px)
      const maxHeight = window.innerHeight - 270; // Tinggi layar dikurangi tinggi card (200px)
      const randomX = Math.floor(Math.random() * maxWidth);
      const randomY = Math.floor(Math.random() * maxHeight);
      return { x: randomX, y: randomY };
    }
    var player = videojs("myVideo", {}, function () {
      player.controls(false);
    });
    $("#yaButton").click(function () {
      $(".pertanyaan").hide();
      $(".hurry").hide();
      myAudio(1, false);
      $("#videoModal").modal("show");
      player.ready(function () {
        player.play();
        animateOctagram();
      });
    });
    $("#tidakButton").click(function () {
      const randomPosition = getRandomPosition();
      $(".pertanyaan").css({
        transform: `translate(${randomPosition.x}px, ${randomPosition.y}px)`,
      });
    });
 
    function animateOctagram() {
      let angle = 0;
      const centerX = $(window).width() / 2;
      const centerY = $(window).height() / 2;
      const radius = Math.min(centerX, centerY) - 100; // Jarak dari pusat

      // Menggunakan jQuery untuk mengubah posisi video
      const animateStep = function () {
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        
        $('#myVideo').animate({ left: x, top: y }, 1000, 'linear', function () {
          angle += Math.PI / 4; // Menggeser sebanyak 45 derajat
          if (angle >= 2 * Math.PI) {
            angle = 0;
          }
          // Rekursif memanggil fungsi untuk animasi berulang
          animateStep();
        });
      };

      animateStep();
    }

  });

  console.log(`
  —–-—▒▒▒▒▒▒▒▒▒▒
  —–-▒███████████▒
  —▒████▒▒▒▒▒▒▒███▒
  -▒████▒▒▒▒▒▒▒▒▒███▒……………….▒▒▒▒▒▒
  -▒███▒▒▒▒▒███▒▒▒███▒…………..▒██████▒
  -▒███▒▒▒▒██████▒▒███▒……….▒██▒▒▒▒██▒
  —▒███▒▒▒███████▒▒██▒…….▒███▒▒█▒▒██▒
  —–▒███▒▒████████▒██▒…▒███▒▒███▒▒██▒
  ——–▒██▒▒██████████▒▒███▒▒████▒▒██▒
  ———▒██▒▒██████████████▒████▒▒██▒
  ———-▒██▒▒█████████████████▒▒██▒
  ————▒██▒▒██████████████▒▒██▒
  ————–▒██▒▒████████████▒▒██▒
  —————-▒██▒▒██████████▒▒██▒
  —————–▒██▒▒████████▒▒██▒
  ——————-▒██▒▒██████▒▒██▒
  ———————▒██▒▒████▒▒██▒
  ———————-▒██▒▒███▒▒█▒
  ————————▒██▒▒█▒▒█▒
  ————————-▒██▒▒▒█▒
  —————————▒██▒█▒
  —————————♥♥♥♥♥♥
  —————————-♥♥♥♥♥
  ——————————♥♥♥
  —————————-—♥♥
  ———————————♥
  
  `)
  console.log(`
  ================Author==================
            MIFTAKHUDDIN FALAKI
  ========================================
  `)