<template>
  <Breadcrumb :style="{ margin: '10px' }">
    <BreadcrumbItem>{{ firstTitle }}</BreadcrumbItem>
    <BreadcrumbItem>{{ secondTitle }}</BreadcrumbItem>
    <BreadcrumbItem>{{ thirdTitle }}</BreadcrumbItem>
  </Breadcrumb>
</template>

<script>
export default {
  name: "ZZBreadcrumb",
  props: {
    firstTitle: String,
    secondTitle: String,
    thirdTitle: String,
  },
};
</script>