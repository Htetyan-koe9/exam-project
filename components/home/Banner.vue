<template>
  <div class="banner-section">
    <img :src="require('@/assets/img/banner-new.webp')" class="banner-img" />
    <div class="banner-content">
      <div class="container">
        <h2>
          <span class="banner-gradient"> 50% INSTANT KOMISI AFILIASI </span
          ><br />
          <span class="banner-white">
            TAMBAH PENGHASILAN ANDA,<br />
            PASSIVE INCOME MENGGIURKAN!
          </span>
        </h2>
        <a
          class="banner-button"
          href="https://aff.oleafiliasi.com/affiliate/register/92337024"
          >Daftar Sekarang</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~assets/styles/main.scss";
.banner-section {
  position: relative;
}
.banner-img {
  width: 100%;
}

.banner-content {
  width: 100%;
  position: absolute;
  left: 0;
  top: 14%;
  color: #fff;

  .banner-gradient {
    background: #faa41f;
    background: linear-gradient(to top, #faa41f 0%, #fef85a 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  .banner-white {
    font-size: 30px;
    font-weight: bold;
    color: #fff;
  }

  .banner-button {
    display: inline-block;
    padding: 10px 16px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 5px;
    background-color: #ff7d00;
    color: #fff;
    margin-top: 15px;
    text-decoration: none;
    font-size: 12px;
    font-weight: 600;
    transition: all 0.2s;

    &:hover {
      transform: scale(1.1);
      background: #faa41d;
    }
  }
}
</style>