export default function countTypesNumber(source) {
  // TODO 6: 在这里写实现代码
  return Object.values(source)
    .map(value => parseInt(value, 10))
    .reduce((pre, cur) => {
      return pre + cur;
    });
}
