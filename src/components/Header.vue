<template>
<div class="container-fluid bg text-center">
      <h1>Kamu butuh?
        <span class="typed-text">{{ typeValue }}</span>
      <span class="cursor" :class="{'typing': typeStatus}">&nbsp;</span>

      </h1>
      <p>
        Kami siap melayani 
        kebutuhan kamu dalam hal bersih-bersih
      </p>
   
      
      <div>
        <router-link class="btn btn-outline-success text-bold px-4 mt-4" to="/booking">Booking</router-link>
      <a href="#" class="btn btn-success text-bold px-4 mt-4">
        Daftar
      </a>
      </div>
</div>

</template>

<script>
export default {
  data: () => {
    return {
      typeValue: '',
      typeStatus: false,
      typeArray: ['Bersih', 'Cuci Mobil', 'Cuci Dapur', 'Pel Rumah'],
      typingSpeed: 200,
      erasingSpeed: 100,
      newTextDelay: 2000,
      typeArrayIndex: 0,
      charIndex: 0
    }
  },
  methods: {
    typeText() {
      if(this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if(!this.typeStatus)
          this.typeStatus = true;


        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
        this.charIndex += 1;

        setTimeout(this.typeText, this.typingSpeed);
      } 
      else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }

    },

    eraseText() {
      if(this.charIndex > 0) {
        if(!this.typeStatus)
          this.typeStatus = true;

        this.typeValue = this.typeArray[this.typeArrayIndex].subtring(0, this.charIndex - 1);
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } 
      else {
        this.typeStatus = false;
        this.typeArrayIndex += 1;
        if(this.typeArrayIndex >= this.typeArray.length)
          this.typeArrayIndex = 0;

        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
    created() {
      setTimeout(this.typeText, this.newTextDelay + 200);
    }
  },
}
</script>

<style scoped lang="scss">

  
.bg {

  background-image: url("../assets/header.jpg");
  /* Center and scale the image nicely */
  background-size: cover;
  background-position:center;
  background-repeat:no-repeat;
  margin-top: -60px;
  padding: 180px 0 165px;
  color: black;
  height: 750px;

  
}

h1 {
  font-size: 8vmin;
  font-weight: 400;
  font-family: 'Poppins', Arial, Helvetica, sans-serif;
  
  span.typed-text {
  color: #d2b94b;
}

span.cursor {
  display: inline-block;
  margin-left: 3px;
  width: 4px;
  background-color: black;
  animation: cursorBlink 1s infinite;
}
span.cursor.typing {
  animation: none;
}
}
p{
  font-size: 5vmin;
  font-weight: lighter;
  color: #000;
}
a {
  font-family: 'Poppins';
  color: #fff;
}
.btn-outline-success {
  color: #000;
  margin-right: 5px;
}



@keyframes cursorBlink {
  49% {background-color: black;}
  50% { background-color: transparent;}
  99% { background-color: transparent;}
}
    
</style>