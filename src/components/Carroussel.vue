<template>
 <div class="carroussel">
    <div id="news">
        <img id="image1" class="image" src="@/assets/carroussel/news1.jpg">
        <img id="image2" class="image" src="@/assets/carroussel/news2.jpg">
        <img id="image3" class="image" src="@/assets/carroussel/news3.jpg">
    </div>
    <div class="navigator">
        <span id="back"><img src="../assets/carroussel/back.png"></span>
            <ul>
                <li id="indicator1"></li>
                <li id="indicator2"></li>
                <li id="indicator3"></li>
            </ul>
        <span id="next"><img src="@/assets/carroussel/next.png"></span>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Carroussel',

};

</script>

<style scoped>

.image {
    position: absolute;
    width: 100%;
}

#news {
    position: relative;
    top: 0;
    left: 0;
    height: 9px;
}

.navigator {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
ul {
    position: relative;
    z-index: 1;
    float: left;
    margin-top: 33%;
    padding: 0;
}

.navigator ul li {
    display: inline-flex;
    list-style: none;
    width: 15px;
    height: 15px;
    border: 1px solid white;
    border-radius: 50%;
    background-color:#92cd01;
    margin: 10px;
    opacity: 0.5;
}

.navigator ul li:hover{
    opacity: 1;
}

#back {
    position: relative;
    float: left;
    width: 6%;
    margin: 17% 0;
    opacity: 0.5;
}

#back img {
    float: right;
}

#back:hover {
    opacity: 1;
}

#next {
    position: relative;
    float: right;
    width: 6%;
    margin: 17% 0;
    opacity: 0.5;
}

#next img {
    float: left;
}

#next:hover {
    opacity: 1;
}
</style>
