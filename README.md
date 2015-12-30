# tingle-amount

## 描述
类淘宝购物车的数量控制组件， 值区域不可编辑。

当触发最大或最小时，对应的控件表现不可交互状态。

![235254b6abd837a16230c232cbfd8e2d](https://cloud.githubusercontent.com/assets/1736244/12046932/d90bd890-aefd-11e5-9b0d-76a4f6bb49cd.png)

![9a98f9017046862b890b71ccdf4ca02c](https://cloud.githubusercontent.com/assets/1736244/12046930/d7e836ac-aefd-11e5-9a42-233067e99ee8.png)

## 用例
```
<Amount min="0" value="5"/>

<Amount min="0" max="8" value="2" onChange={t.handleChange.bind(t)}/>
```

## 事件

#### .onChange(value)

参数：value

触发：当值改版时

返回：新的值

## 属性

#### min

描述: 最小值

类型: String Number

默认: 0

必填: 否

#### max

描述: 最大值

类型: String Number

默认: ''

必填: 否

#### value

描述: 传入初始值

类型: String Number

默认: 0

必填: 否

## Links

- [Issues](http://github.com/tinglejs/tingle-notification/issues)
