let allVideos = [
   {
      name: "Sinal 1",
      src: " https://tv.wcli.li/record/live.php?ch=0",
      id: "vid_1"
   },
   {
      name: "Sinal 1 ALT",
      src: " https://tv.wcli.li/record/alt.php?ch=0",
      id: "vid_2"
   },
   {
      name: "Sinal 2",
      src: "https://tv.wcli.li/record/live.php?ch=1",
      id: "vid_3"
   },
   {
      name: "Sinal 2 ALT",
      src: "https://tv.wcli.li/record/alt.php?ch=1",
      id: "vid_4"
   },
   {
      name: "Sinal 3", 
      src: "https://tv.wcli.li/record/live.php?ch=2",
      id: "vid_5"
   },
   {
      name: "Sinal 3 ALT",
      src: "https://tv.wcli.li/record/alt.php?ch=2",
      id: "vid_6"
   },
   {
      name: "Sinal 4",
      src: "https://tv.wcli.li/record/live.php?ch=3",
      id: "vid_7"
   },
   {
      name: "Sinal 4 ALT",
      src: "https://tv.wcli.li/record/alt.php?ch=3",
      id: "vid_8"
   },
   {
      name: "Sinal 5",
      src: "https://tv.wcli.li/record/live.php?ch=4",
      id: "vid_9"
   },
   {
      name: "Sinal 5 ALT",
      src: "https://tv.wcli.li/record/alt.php?ch=4",
      id: "vid_10"
   },
   {
      name: "Sinal 6",
      src: "https://tv.wcli.li/record/live.php?ch=5",
      id: "vid_12"
   },
   {
      name: "Sinal 6 ALT",
      src: "https://tv.wcli.li/record/alt.php?ch=5",
      id: "vid_13"
   },
   {
      name: "Sinal 7",
      src: "h#hvEa8pnUjCE",
      id: "vid_10"
   },
   {
      name: "Sinal 7 ALT",
      src: "h#Bk3Pe5XPgUI",
      id: "vid_11"
   },
   {
      name: "Sinal 8",
      src: "h#hvEa8pnUjCE",
      id: "vid_12"
   },
   {
      name: "Sinal 8 ALT",
      src: "h#Bk3Pe5XPgUI",
      id: "vid_13"
   },
   {
      name: "Sinal 9",
      src: "h#hvEa8pnUjCE",
      id: "vid_14"
   },
   {
      name: "Sinal 9 ALT",
      src: "h#Bk3Pe5XPgUI",
      id: "vid_15"
   },
   {
      name: "Sinal 10",
      src: "h#hvEa8pnUjCE",
      id: "vid_14"
   },
   {
      name: "Sinal 10 ALT",
      src: "h#Bk3Pe5XPgUI",
      id: "vid_15"
   },
 
   {
      name: "Sinal 1 720p",
      src: "https://playertv.net/playplusembed/live.php?ch=0",
      id: "vid_16"
   },
   {
      name: "Sinal 1 ALT",
      src: "https://reidoscanais.com/embed/?id=afazenda15",
      id: "vid_17"
   },
   {
      name: "Sinal 2 720p",
      src: "https://reidoscanais.com/embed/?id=afazenda15-2",
      id: "vid_18"
   },
   {
      name: "Sinal 2 ALT",
      src: "https://reidoscanais.com/embed/?id=afazenda15-2",
      id: "vid_19"
   },
   {
      name: "Sinal 3 720p", 
      src: "https://reidoscanais.com/embed/?id=afazenda15-3",
      id: "vid_20"
   },
   {
      name: "Sinal 3 ALT",
      src: "https://reidoscanais.com/embed/?id=afazenda15-3",
      id: "vid_21"
   },
   {
      name: "Sinal 4 720p",
      src: "https://reidoscanais.com/embed/?id=afazenda15-4",
      id: "vid_22"
   },
   {
      name: "Sinal 4 ALT",
      src: "https://reidoscanais.com/embed/?id=afazenda15-4",
      id: "vid_23"
   },
   {
      name: "Sinal 5 720p",
      src: "https://reidoscanais.com/embed/?id=afazenda15-5",
      id: "vid_24"
   },
   {
      name: "Sinal 5 ALT",
      src: "https://reidoscanais.com/embed/?id=afazenda15-5",
      id: "vid_25"
   },
   {
      name: "Sinal 6 720p",
      src: "https://reidoscanais.com/embed/?id=afazenda15-6",
      id: "vid_26"
   },
   {
      name: "Sinal 6 ALT",
      src: "https://reidoscanais.com/embed/?id=afazenda15-6",
      id: "vid_27"
   },
   {
      name: "Sinal 7 720p",
      src: "h#hvEa8pnUjCE",
      id: "vid_28"
   },
   {
      name: "Sinal 7 ALT",
      src: "h#Bk3Pe5XPgUI",
      id: "vid_29"
   },
   {
      name: "Sinal 8 720p",
      src: "h#hvEa8pnUjCE",
      id: "vid_30"
   },
   {
      name: "Sinal 8 ALT",
      src: "h#Bk3Pe5XPgUI",
      id: "vid_31"
   },
   {
      name: "Sinal 9 720p",
      src: "h#hvEa8pnUjCE",
      id: "vid_32"
   },
   {
      name: "Sinal 9 ALT",
      src: "h#Bk3Pe5XPgUI",
      id: "vid_33"
   },
   {
      name: "Sinal 10 720p",
      src: "h#hvEa8pnUjCE",
      id: "vid_34"
   },
   {
      name: "Record TV",
      src: "http:// tv.wcli.li/record/live.php?ch=1",
      id: "vid_35"
   },
   {
      name: "Record TV 720p ALT",
      src: "https://reidoscanais.net/embed/?id=recordsp",
      id: "vid_36"
   }
]
