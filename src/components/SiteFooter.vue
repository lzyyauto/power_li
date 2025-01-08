<template>
  <div class="footer">
    <div>{{ $t('companyName') }}</div>
    <div>{{ $t('address') }}</div>
    <div>{{ $t('email') }}manager@ccpplab.com</div>
    <div>{{ $t('email') }}284346652@qq.com</div>
    <div>{{ $t('phone') }}+86 19945754187</div>
  </div>
</template>

<script>
export default {
  name: 'SiteFooter'
};
</script>

<style>
.footer {
  background-color: #001f3f; /*深蓝色*/
  color: #fff;
  text-align: center;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
</style>
