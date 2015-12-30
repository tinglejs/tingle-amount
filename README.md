# tingle-amount

## 描述
类淘宝购物车的数量控制组件, 值区域不可编辑.

## 事件
onChange(string value)
value - 新值

## 属性
min
描述: 最小值
类型: String Number
默认: 0
必填: 否

max
描述: 最大值
类型: String Number
默认: ''
必填: 否

value
描述: 传入初始值
类型: String Number
默认: 0
必填: 否

## 用例
```
<Amount min="0" value="5"/>

## 异常行为
如果传入min为4, value为2, 或者min为4 value不传等这种预设值异常的情况, 组件会保持默认不做矫正处理, 但是会按照交互规则正确的禁用对应按钮.