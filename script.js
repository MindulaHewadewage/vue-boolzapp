const dt = luxon.DateTime;

const app = Vue.createApp({
  data() {
    return {
      currentIndex: 0,
      newMessage: "",
      searchedName: "",
      user: {
        name: "Mindu Fernando",
        avatar: "_io",
      },
      contacts: [
        {
          id:1,
          name: "Michele",
          avatar: "_1",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              text: "Hai portato a spasso il cane?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              text: "Ricordati di dargli da mangiare",
              status: "sent",
            },
            {
              date: "10/01/2020 16:15:22",
              text: "Tutto fatto!",
              status: "received",
            },
          ],
        },
        {
          id:2,
          name: "Fabio",
          avatar: "_2",
          visible: true,
          messages: [
            {
              date: "20/03/2020 16:30:00",
              text: "Ciao come stai?",
              status: "sent",
            },
            {
              date: "20/03/2020 16:30:55",
              text: "Bene grazie! Stasera ci vediamo?",
              status: "received",
            },
            {
              date: "20/03/2020 16:35:00",
              text: "Mi piacerebbe ma devo andare a fare la spesa.",
              status: "received",
            },
          ],
        },
        {
          id:3,
          name: "Samuele",
          avatar: "_3",
          visible: true,
          messages: [
            {
              date: "28/03/2020 10:10:40",
              text: "La Marianna va in campagna",
              status: "received",
            },
            {
              date: "28/03/2020 10:20:10",
              text: "Sicuro di non aver sbagliato chat?",
              status: "sent",
            },
            {
              date: "28/03/2020 16:15:22",
              text: "Ah scusa!",
              status: "received",
            },
          ],
        },
        {
          id:4,
          name: "Luisa",
          avatar: "_4",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              text: "Lo sai che ha aperto una nuova pizzeria?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              text: "Si, ma preferirei andare al cinema",
              status: "received",
            },
          ],
        },
      ],
    };
  },

  computed: {
    currentContact() {
      return this.contacts[this.currentIndex];
    },
    currentChat() {
      return this.currentContact.messages;
    },
    filteredName() {
      return this.contacts.name;
    },
  },

  methods: {
    avatarUrl(avatar) {
      return `img/avatar${avatar}.jpg`;
    },

    setCurrentIndex(i) {
      this.currentIndex = i;
    },

    pushMessage() {
      if (this.newMessage) {
        const newMessage = {
          date: this.setCurrentTime(),
          text: this.newMessage,
          status: "sent",
        };
        this.currentChat.push(newMessage);
        this.newMessage = "";
      };

      setTimeout(() =>{
        const answer = {
          date:this.setCurrentTime(),
          text:'ok',
          status:'received'
        }
        this.currentChat.push(answer);

      },1000)
    },


    setCurrentTime() {
      return dt
        .now()
        .setLocale("it")
        .toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS);
    }


    
  },
});

app.mount("#root");
