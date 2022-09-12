<template>
    <Header />
    <div class="w-full">
        <div id="header"></div>
        <section class="w-11/12 md:w-9/12 lg:w-7/12 m-auto py-8">
            <h3>معادن سنگ تراورتن و مرمر ما</h3>
            <p class="mt-2 mr-2 md:mr-4 text-gray-600 text-sm md:text-lg">تراورتن اصفهان از سال 1993 از معادن ما استخراج می شود. ایرانیان باستان از همان حوضه معدن سنگ تراورتن را برای ساخت مهمترین آثار فرهنگی ایران استخراج می کردند. امروزه شرکت ما به تولید، استخراج، فرآوری و بازاریابی سنگ تراورتن و مرمریت و ساخت ایران در سراسر جهان ادامه می دهد. در حال حاضر ما در سراسر 24 هکتار زمین با سه معدن فعال کار می کنیم.</p>
            <Slider class="my-4" />
            <p class="mt-2 mr-2 md:mr-4 text-gray-600 text-sm md:text-lg">شرکت ما کل فرآیند تولید را از استخراج تا تبدیل محصولات دنبال می کند. ما سالانه بیش از 30000 متر مربع محصولات تراورتن و سنگ مرمر استخراج می کنیم و از طریق استفاده از دستگاه های برش بلوک و اره های باند به مجموع 20000 متر مربع محصول نهایی در ماه می رسیم. تیم بسیار متخصص از کارگران اجازه می دهد تا نیازهای طراحی بزرگترین معماران، مهندسان و طراحان در بازار جهان را برآورده سازند.</p>
            
            <img src="../../assets/img/map.jpg" class="w-full mt-20 mb-4" alt="">
            <p class="mt-2 mr-2 md:mr-4 text-gray-600 text-sm md:text-lg">در طول این قرن فعالیت، شرکت ما قراردادهای مشارکت مهمی را با سایر معادن پیشرو در زمینه سنگ مرمر و گرانیت هم در ایران و هم در سراسر جهان منعقد کرده است. ما علاوه بر مواد تراورتن رومی، سنگ‌های طبیعی اضافی را ارائه می‌کنیم که به دنبال آن هستیم تا نقطه مرجعی در عرضه کیفی سنگ در برند ساخت ایران خود باشیم.</p>
        </section>
    </div>
    <Footer />
</template>

<script setup>
import Header from '../home-sections/hed.vue'
import Footer from '../home-sections/footer.vue'
import Slider from './slider.vue'
import { onBeforeRouteLeave } from 'vue-router';
onBeforeRouteLeave((to, from) =>{
    console.log(to, from)
    // called when the route that renders this component is about to be navigated away from.
    // As with `beforeRouteUpdate`, it has access to `this` component instance.
  })
</script>

<style scoped>
#header{
    background: url(../../assets/img/head-img-quarry.jpg);
    height: 65vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 80%;
}
@media only screen and (max-width: 991px){
    #header{
        padding-bottom: 40%;
    }
}
@media only screen and (max-width: 521px){
    #header{
        height: 55vh;
    }
}
</style>