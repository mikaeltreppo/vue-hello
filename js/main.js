const { createApp } = Vue

  createApp({
    data() {
      return {
        message: "Ciao Mondo!!!",
        immagine : "https://tse3.explicit.bing.net/th?id=OIP.zyNSb0UXhP8TfxYbj-GNWgAAAA&pid=Api&P=0"
      }
    }
  }).mount('#app')