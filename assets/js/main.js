const images    = ['asseteeuuycanada.svg', 'america.svg', 'europa.svg', 'africa.svg', 'asia.svg',' '];
const structure = 
`
<div class="textResponsive"><h4>Toda la información del mundo en un solo click</h4><p>(Seleccioná un continente y enterate de todo lo que está aconteciendo)</p></div>
<div id="carouselNews" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div>
        <a href="#"><span>Estados Unidos<br>y Canadá</span><img src="assets/img/eeuuycanada.svg" class="d-block w-100" alt="Mapa de Estados Unidos y Canadá"></a>
        <a href="#"><span>América<br>Latina</span><img src="assets/img/america.svg" class="d-block w-100" alt="Mapa de América Latina"></a>
      </div>
    </div>
    <div class="carousel-item">
      <div>
        <a href="#"><span>Europa</span><img src="assets/img/europa.svg" class="d-block w-100" alt="Mapa de Europa"></a>
        <a href="#"><span>Africa</span><img src="assets/img/africa.svg" class="d-block w-100" alt="Mapa de Africa"></a>
      </div>
    </div>
    <div class="carousel-item">
      <div>
        <a href="#"><span>Asia y<br>Pacífico</span><img src="assets/img/asia.svg" class="d-block w-100" alt="Mapa de Asia y Pacífico"></a>
        <a href="#" class="o"><span>Asia y<br>Pacífico</span><img src="assets/img/asia.svg" class="d-block w-100" alt="Mapa de Asia y Pacífico"></a>
      </div>
    </div>
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselNews"  data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselNews"  data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
`;
if(document.getElementById('carouselNewspapper'))
  document.getElementById('carouselNewspapper').innerHTML = structure;

const openMap = document.getElementById('openMap');
const closeMap = document.getElementById('closePanel');
const menuMap = document.querySelector('.mapsMenu')
  openMap.onclick = e => {
    menuMap.classList.toggle('openMaps');
    console.log(e.target);  // to get the element
    console.log(e.target.tagName);  // to get the element tag name alone
} 
  closeMap.onclick = e => {
    menuMap.classList.toggle('openMaps');
    console.log(e.target);  // to get the element
    console.log(e.target.tagName);  // to get the element tag name alone
} 