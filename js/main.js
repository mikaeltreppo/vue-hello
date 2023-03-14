const { createApp } = Vue

  createApp({
    data() {
      return {
        message: "Ciao Mondo!!!",
        immagine : "https://tse3.mm.bing.net/th?id=OIP.KYsS-IQ5v_OZAOEzgJB74AHaFG&pid=Api&P=0"
      }
    }
  }).mount('#app')