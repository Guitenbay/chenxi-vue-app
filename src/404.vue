<template>
  <div id="not-found">
    <p>Error:</p>
    <p>404 Not Found!</p>
  </div>
</template>

<style scoped lang="less">
#not-found {
  text-align: start;
  width: 50vw;
  min-width: 200px;
  margin: 1em auto;
  padding: 20px;
  color: rgba(255, 255, 255, 0.9);
  background-color: #37474f;
  border-radius: 3px;
  > p {
    // & 表示该代码块对应的标签，这里指 p
    &:before {
      content: '$ ';
    }
    font-size: 12pt;
    font-weight: bold;
    font-family: 'Courier New', Courier, monospace;
  }
}
</style>
