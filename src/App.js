import React, { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "小米 AX6000 路由器",
      price: 50,
      image: "/pics/1.jpg",
      description: "WiFi 6，2.5G WAN口，1G LAN口，5Ghz 4×4，2.4Ghz 2x2，内存512MB，IEEE 802.11a/b/g/n/ac/ax。",
      condition: "8.5成新",
      status: "未卖出",
      update: "10月2日 1:21PM"
    },
    {
      id: 2,
      name: "苹果 Mac mini",
      price: 200,
      image: "/pics/2.jpg",
      description: "Mac mini M1 16GB运存+256GB储存，另外送拓展坞。拓展坞支持内部插入1个2.5英寸硬盘。",
      condition: "9成新",
      status: "未卖出",
      update: "10月2日 1:21PM"
    },
    {
      id: 3,
      name: "索尼 WH-1000XM3 头戴式耳机",
      price: 100,
      image: "/pics/3.jpg",
      description: "音质还行，降噪效果T0级别。带保护盒。可连接索尼官方SoundConnect耳机管理软件，可调EQ，EXTRA BASS级别等。",
      condition: "8.5成新",
      status: "未卖出",
      update: "10月2日 1:21PM"
    },
    {
      id: 4,
      name: "Blink mini 家庭监控",
      price: 10,
      image: "/pics/4.jpg",
      description: "可远程在外查看家里的情况，移动检测，警报通过手机推送，夜间红外线模式，",
      condition: "9成新",
      status: "未卖出",
      update: "10月2日 1:21PM"
    },
    {
      id: 5,
      name: "ROG 路由器",
      price: 50,
      image: "/pics/5.jpeg",
      description: "带酷炫RGB的路由器，带USB接口，可插移动硬盘通过wifi访问硬盘文件",
      condition: "9成新",
      status: "未卖出",
      update: "10月2日 1:21PM"
    },
    {
      id: 6,
      name: "索尼 SRS-XB43 蓝牙音响",
      price: 80,
      image: "/pics/6.jpg",
      description: "超重低音，可连接索尼官方SoundConnect耳机管理软件，可调EQ。具有LIVE模式，声场更广，更适合派对。6个发声单元，3公斤重，超长续航。DXOMARK排名33名",
      condition: "9成新",
      status: "未卖出",
      update: "10月2日 1:21PM"
    },
    {
      id: 7,
      name: "联想拯救者",
      price: 80,
      image: "/pics/7.jpg",
      description: "i7、Win 10、32GB内存、256GB SATA固态硬盘。",
      condition: "8成新",
      status: "未卖出",
      update: "10月2日 1:21PM"
    },
    {
      id: 8,
      name: "ANKER 无线充电挂座",
      price: 5,
      image: "/pics/8.jpg",
      description: "型号：A2540。",
      condition: "9成新",
      status: "未卖出",
      update: "10月2日 1:21PM"
    },
    {
      id: 9,
      name: "华硕 TUF Gaming 1080P 165Hz 显示器",
      price: 80,
      image: "/pics/9.jpg",
      description: "带耳机孔；自带扬声器；只支持HDMI和VGA，不支持DP；色域125%sRGB。",
      condition: "9成新",
      status: "未卖出",
      update: "10月2日 1:21PM"
    },
    {
      id: 10,
      name: "宏基 2K 240Hz 显示器",
      price: 80,
      image: "/pics/10.jpg",
      description: "XXXXX",
      condition: "9成新",
      status: "未卖出",
      update: "10月2日 1:21PM"
    },
    {
      id: 11,
      name: "Nulaxy 笔记本支架",
      price: 5,
      image: "/pics/11.jpg",
      description: "Nulaxy 笔记本支架",
      condition: "8成新",
      status: "未卖出",
      update: "10月2日 1:21PM"
    },
    {
      id: 12,
      name: "小米显示器挂灯",
      price: 10,
      image: "/pics/12.jpg",
      description: "色温：2700-6500K；270流明；5Vx1A = 5W功耗；带无线遥控器",
      condition: "8成新",
      status: "未卖出",
      update: "10月2日 1:21PM"
    },
    {
      id: 13,
      name: "惠普打印机",
      price: 20,
      image: "/pics/13.jpg",
      description: "墨盒用完了，购买即送500张Letter纸。",
      condition: "8成新",
      status: "未卖出",
      update: "10月2日 1:21PM"
    },
    {
      id: 14,
      name: "EVGA 电源 450W",
      price: 20,
      image: "/pics/14.jpg",
      description: "全模组",
      condition: "9成新",
      status: "未卖出",
      update: "10月2日 1:21PM"
    },
    {
      id: 15,
      name: "微星 MEG S360 水冷",
      price: 50,
      image: "/pics/15.jpg",
      description: "微星最高端的水冷，带LCD显示屏。",
      condition: "9成新",
      status: "未卖出",
      update: "10月2日 1:21PM"
    },






    {
      id: 98,
      name: "其他小件物品",
      price: 6324,
      image: "/pics/default.jpg",
      description: "笔筒；",
      condition: "全新",
      status: "未卖出",
      update: "10月2日 1:21PM"
    },
    {
      id: 99,
      name: "注意事项",
      price: 6324,
      image: "/pics/default.jpg",
      description: "所有的二手物品我会尽量擦拭干净，然后再给你。微信绿泡泡：JJ24KVVS。",
      condition: "全新",
      status: "已卖出",
      update: "10月2日 1:21PM"
    },
  ];

  return (
    <div className="App">
      <header className="app-header">
        <h1>Vani11a 的二手杂货铺（🛰️：JJ24KVVS）</h1>
      </header>
      <div className="main-container">
        <div className="product-list-container">
          <ProductList 
            products={products} 
            onSelectProduct={setSelectedProduct}
            selectedProductId={selectedProduct?.id}
          />
        </div>
        <div className="product-detail-container">
          <ProductDetail product={selectedProduct} />
        </div>
      </div>
    </div>
  );
}

export default App;
