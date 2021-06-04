<template lang="html">
  <div class="ma-2">
    <v-card outlined flat height="150"> <h1 class="glitch" data-text="!Error!">Page Not Found</h1> </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
$primaryColor: rgb(210, 175, 255);
$secondaryColor: #1E1E1E;
$steps: 10;

.glitch {
    margin-top: 60px;
    color: $primaryColor;
    font-family: "Exo", sans-serif;
    font-weight: 600;
    text-align: center;
    font-size: 100px;
    text-transform: uppercase;
    letter-spacing: 0.01em;
    transform: scale3d(1,1,1);
   

    &::before,
    &::after {
        content: attr(data-text);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        overflow: hidden;
        background: $secondaryColor;
        color: $primaryColor;
        clip: rect(0, 900px, 0, 0);

    }

    &::before {
        left: 7px;
        text-shadow: 1px 0 green;
        animation: glitch-effect 3s infinite linear alternate-reverse;
    }

    &::after {
        left: 3px;
        text-shadow: -1px 0 red;
        animation: glitch-effect 2s infinite linear alternate-reverse;
    }
}

@keyframes glitch-effect{
  
    @for $i from 0 through $steps{
        #{percentage($i*(1/$steps))}{
            clip:rect(random(100)+px,9999px,random(100)+px,0);
        }
    }
    
}
</style>
