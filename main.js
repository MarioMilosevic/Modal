const app = document.querySelector("#app");
app.innerHTML = `
<div class="mainDiv">
  <div class="clickableDivs">
    <div class="clickable">1</div>
    <div class="clickable">2</div>
    <div class="clickable">3</div>
  </div>
  <div class="textDiv"></div>
</div>`;

const text = document.querySelector('.textDiv')

const text1 = `And produce say the ten moments parties. Simple innate summer fat appear basket his desire joy. Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is. Yet preference connection unpleasant yet melancholy but end appearance. And excellence partiality estimating terminated day everything`;
const text2 = `Fat new smallness few supposing suspicion two. Course sir people worthy horses add entire suffer. How one dull get busy dare far. At principle perfectly by sweetness do. As mr started arrival subject by believe. Strictly numerous outlived kindness whatever on we no on addition.`;

const text3 = `Am if number no up period regard sudden better. Decisively surrounded all admiration and not you. Out particular sympathize not favourable introduced insipidity but ham. Rather number can and set praise. Distrusts an it contented perceived attending oh. Thoroughly estimating introduced stimulated why but motionless.`;

const divs = document.querySelectorAll('.clickable')

divs.forEach(div => div.addEventListener('click', function(){
  
}))