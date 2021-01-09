<template>
  <footer class="home-footer">
      Congratulations! You've got a $50 customized phone case,<br />choose your style and have some fun ion diy!
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
.home-footer{
    margin-left: auto;
    margin-right: auto;
    line-height: 1.5;
    text-align: center;
    margin-bottom: 40px;
    font-weight: 700;
    color: rgba(51, 51, 51, .6);
}
@media screen and (min-width: 1600px){
    .home-footer{
        margin-top: 120px;
        font-size: 38px;        
    }
}
@media screen and (min-width: 1000px) and (max-width: 1600px) {
    .home-footer{
        margin-top: 100px;
        font-size: 30px;
    }
}
@media screen and (min-width: 600px) and (max-width: 1000px){
    .home-footer{
        margin-top: 80px;
        font-size: 20px;
    }
}
@media screen and (max-width: 600px){
    .home-footer{
        margin-top: 60px;
        font-size: 16px;
    }
}
</style>