# vuex-shopping-cart

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
# Vue Cli+Node.js(非同步後端) 購物車教學
## Step1:環境設置

1. 先下載[Node.js](https://nodejs.org/en/)
2. 接著打開終端機(Terminal)執行以下命令來安裝最新版本的Vue CLI：
      ```
      npm install -g @vue/cli
      ```
      :::info
     注意：在某些系統上，全域性安裝npm包可能會導致許可權錯誤，這會影響到安裝的過程。
     所以可在前面加入`sudo`，但要注意安全性的問題。
     :::
3. 使用以下命令檢查您是否有正確的版本：
	```
    vue --version
	```
4. 確認是否有出現以下畫面
    ![](https://i.imgur.com/rimMOmm.png)
	
	:::info
	每人的版本號不同如果過舊可輸入`npm update -g @vue/cli`來升級
	:::
## Step2:架設你的VueProject
1. 在桌面或者你想放的地方創造資料夾
    此次範例我個人以「![](https://i.imgur.com/eweeUXd.png)」示範
2. 接著打開你的終端機(Terminal)進入你的資料夾位置 
    範例:`cd /桌面/Vue_cart_test`
    ![](https://i.imgur.com/J2raSEq.png)
    :::danger
    一定要確認是否在正確的資料夾位置唷！
    :::
3. 輸入以下指令建立你VueProject
	```
	vue create vuex-shopping-cart
	```
   這是使用Vue CLI命令vue create來製作一個名為vuex-shopping-cart專案。
    有關Vue CLI的更多資訊，請檢視[Vue.js 使用Vue CLI安裝 Vue3](https://medium.com/web-design-zone/vue-js-使用vue-cli安裝-vue3-f54d05ef348e)
	
	- 我是直接選第三個: Manually select features
	![](https://i.imgur.com/z4S6UIF.png)
	
	- 接著選擇了Router以及Vuex這兩個選項：
	![](https://i.imgur.com/I4BBZkM.png)
	
	- 版本我選擇3.x
	![](https://i.imgur.com/xbFqoe1.png)
	
	- 然後選擇n
	![](https://i.imgur.com/3vFHCOK.png)
	
	- 選擇第一個In dedicated config files
	![](https://i.imgur.com/vti9IUD.png)
    
	- 最後一個選項也是選N
    ![](https://i.imgur.com/DB2OXKS.png)
	
	- 最後會出現以下畫面就表示你的Vue創建完成
	![](https://i.imgur.com/2p1tAYY.png)
	
	- 照著指示確認是否完全建置完成
	```
	cd vuex-shopping-cart
	```
    - 接著啟動你的Vue serve
	```
	npm run serve
	```
	點擊你的localhost
	![](https://i.imgur.com/z4mEd3F.png)
	出現以下畫面表示你的Vue基本環境已完成
	![](https://i.imgur.com/xn4YZj3.png)
## Step3:Vue前端環境建置
1. 安裝Bulma，這是一個基於Flexbox的免費開源CSS框架。
	```
	npm install bulma
	```
2. 接著找`src`的資料夾並打開`main.js`輸入以下指令
	```
	import './../node_modules/bulma/css/bulma.css'
	```
	![](https://i.imgur.com/fPX1x2g.png)
	然後儲存後關閉
3. 再來將使用Axios模組向伺服器提出請求。 透過執行以下命令新增Axios模組：
	```
	npm install axios
	```
4. 最後再次確認Vue是否能正常運行
	```
	npm run serve
	``` 
	若一切正常就可以`ctrl+c`離開伺服器準備建立後端了。
## Step4:Node.js後端環境建置
1. 在此步驟中，將建立一個單獨的後端來使用您的Vue專案。
首先，從Vue目錄中移出在終端機(Terminal)輸入：
	```
	cd ..
	``` 
2. 製作一個名為`cart-backen`資料夾：
	```
	mkdir cart-backend
	``` 
3. 然後讓終端機資料夾位置移到`cart-backen`內	
	``` 
	cd cart-backend
	``` 
4. 接著分別使用以下指令分別創造三個檔案：
	``` 
	touch server.js
	touch server-cart-data.json
	touch server-product-data.json
	``` 
5. 然後現在執行以下命令來建立package.json檔案：
	```
	npm init
	``` 	
	:::danger
    這個不是`npm i`千萬不要搞錯
    :::
6. 將這些後端資料安裝到您的Node專案中：	
	```
	npm install concurrently express body-parser
	``` 
	Express是Web應用程式的節點框架，它將為處理API請求。 
	同時將用於同時執行Express後端伺服器和Vue.js開發伺服器。 
	最後，`body-parse`是一個Express中介軟體，它是解析對API的請求。
7. 接下來，用VsCode開啟cart-backend內的server.js檔案並輸入以下指令：
```javascript=
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PRODUCT_DATA_FILE = path.join(__dirname, 'server-product-data.json');
const CART_DATA_FILE = path.join(__dirname, 'server-cart-data.json');

app.set('port', (process.env.PORT || 3000));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  next();
});
app.post('/cart', (req, res) => {
    fs.readFile(CART_DATA_FILE, (err, data) => {
      const cartProducts = JSON.parse(data);
      const newCartProduct = { 
        id: req.body.id,
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        image_tag: req.body.image_tag, 
        quantity: 1 
      };
      let cartProductExists = false;
      cartProducts.map((cartProduct) => {
        if (cartProduct.id === newCartProduct.id) {
          cartProduct.quantity++;
          cartProductExists = true;
        }
      });
      if (!cartProductExists) cartProducts.push(newCartProduct);
      fs.writeFile(CART_DATA_FILE, JSON.stringify(cartProducts, null, 4), () => {
        res.setHeader('Cache-Control', 'no-cache');
        res.json(cartProducts);
      });
    });
  });
app.delete('/cart/delete', (req, res) => {
  fs.readFile(CART_DATA_FILE, (err, data) => {
    let cartProducts = JSON.parse(data);
    cartProducts.map((cartProduct) => {
      if (cartProduct.id === req.body.id && cartProduct.quantity > 1) {
        cartProduct.quantity--;
      } else if (cartProduct.id === req.body.id && cartProduct.quantity === 1) {
        const cartIndexToRemove = cartProducts.findIndex(cartProduct => cartProduct.id === req.body.id);
        cartProducts.splice(cartIndexToRemove, 1);
      }
    });
    fs.writeFile(CART_DATA_FILE, JSON.stringify(cartProducts, null, 4), () => {
      res.setHeader('Cache-Control', 'no-cache');
      res.json(cartProducts);
    });
  });
});
app.delete('/cart/delete/all', (req, res) => {
  fs.readFile(CART_DATA_FILE, () => {
    let emptyCart = [];
    fs.writeFile(CART_DATA_FILE, JSON.stringify(emptyCart, null, 4), () => {
      res.json(emptyCart);
    });
  });
});
app.get('/products', (req, res) => {
  fs.readFile(PRODUCT_DATA_FILE, (err, data) => {
    res.setHeader('Cache-Control', 'no-cache');
    res.json(JSON.parse(data));
  });
});
app.get('/cart', (req, res) => {
  fs.readFile(CART_DATA_FILE, (err, data) => {
    res.setHeader('Cache-Control', 'no-cache');
    res.json(JSON.parse(data));
  });
});
app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`);
});
```
記得儲存再離開

8. 接著打開`server-cart-data.json`這個檔案輸入以下資料：
```javascript=
[
    {
        "id": 2,
        "title": "MIKANO Engine",
        "description": "Lorem ipsum dolor sit amet, consectetur  dignissimos suscipit voluptatibus distinctio, error nostrum expedita omnis ipsum sit inventore aliquam sunt quam quis! ",
        "price": 650.9,
        "image_tag": "diesel-engine.png",
        "quantity": 1
    },
    {
        "id": 3,
        "title": "SEFANG Engine",
        "description": "Lorem ipsum dolor sit amet, consectetur  dignissimos suscipit voluptatibus distinctio, error nostrum expedita omnis ipsum sit inventore aliquam sunt quam quis!",
        "price": 619.9,
        "image_tag": "sefang-engine.png",
        "quantity": 1
    }
]
```

記得儲存再離開

9.	接著打開`server-product-data.json`這個檔案輸入以下資料：
```javascript=
[
    {
      "id": 1,
      "title": "CAT Engine",
      "description": "Lorem ipsum dolor sit amet, consectetur  dignissimos suscipit voluptatibus distinctio, error nostrum expedita omnis ipsum sit inventore aliquam sunt quam quis!",
      "product_type": "power set/diesel engine",
      "image_tag": "CAT-engine.png",
      "created_at": 2020,
      "owner": "Colton",
      "owner_photo": "image-colton.jpg",
      "email": "colt@gmail.com",
      "price": 719.9
    },
    {
      "id": 2,
      "title": "MIKANO Engine",
      "description": "Lorem ipsum dolor sit amet, consectetur  dignissimos suscipit voluptatibus distinctio, error nostrum expedita omnis ipsum sit inventore aliquam sunt quam quis! ",
      "product_type": "power set/diesel engine",
      "image_tag": "diesel-engine.png",
      "created_at": 2020,
      "owner": "Colton",
      "owner_photo": "image-colton.jpg",
      "email": "colt@gmail.com",
      "price": 650.9
    },
    {
      "id": 3,
      "title": "SEFANG Engine",
      "description": "Lorem ipsum dolor sit amet, consectetur  dignissimos suscipit voluptatibus distinctio, error nostrum expedita omnis ipsum sit inventore aliquam sunt quam quis!",
      "product_type": "power set/diesel engine",
      "image_tag": "sefang-engine.png",
      "created_at": 2017,
      "owner": "Anne",
      "owner_photo": "image-anne.jpg",
      "email": "anne@gmail.com",
      "price": 619.9
    },
    {
      "id": 4,
      "title": "CAT Engine",
      "description": "Lorem ipsum dolor sit amet, consectetur  dignissimos suscipit voluptatibus distinctio, error nostrum expedita omnis ipsum sit inventore aliquam sunt quam quis!",
      "product_type": "power set/diesel engine",
      "image_tag": "lawn-mower.png",
      "created_at": 2017,
      "owner": "Irene",
      "owner_photo": "image-irene.jpg",
      "email": "irene@gmail.com",
      "price": 319.9
    }
    
  ]
```
記得儲存再離開

10. 最後，執行此命令以執行伺服器：
```
node server
```
出現以下畫面就可以了
![](https://i.imgur.com/Okzuq5r.png)
:::info
讓伺服器在終端機(Terminal)中繼續執行。
:::
## Step5:Vue購物車建立
1. 在VsCode內打開`vuex-shopping-cart`資料夾
- 建立`vue.config.js`檔案
  - 並輸入以下資料
```javascript=
module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000/',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}
```
![](https://i.imgur.com/cUmDpF5.png)

:::warning
注意 如果已經有`vue.config.js`這個檔案那只要更改裡面的內容即可。
:::

2. 使用Vuex設定狀態管理
- Modules資料夾的建立	
	- 在`src/store`建一個資料夾命名為：`modules`
	  並在`modules`內再建立兩個資料夾分別為`cart`和`product`
- Modules/Cart資料夾的建置  
	- 在`cart`資料夾內建立`index.js`檔案並放入以下資料
	![](https://i.imgur.com/iV5lT2M.png)

```javascript=
import axios from 'axios';
const state = {
    cartItems: []
}


const mutations = {
    UPDATE_CART_ITEMS(state, payload) {
        state.cartItems = payload;
    }
}

const actions = {
    getCartItems({ commit }) {
        axios.get('/api/cart').then((response) => {
            commit('UPDATE_CART_ITEMS', response.data)
        });
    },
    addCartItem({ commit }, cartItem) {
        axios.post('/api/cart', cartItem).then((response) => {
            commit('UPDATE_CART_ITEMS', response.data)
        });
    },
    removeCartItem({ commit }, cartItemId) {
        axios.delete(`/cart/delete/${cartItemId}`,).then((response) => {
            commit('UPDATE_CART_ITEMS', response.data)
        });
    },
    removeAllCartItems({ commit }) {
        axios.delete('/api/cart/delete/all').then((response) => {
            commit('UPDATE_CART_ITEMS', response.data)
        });
    }
}

const getters = {
    cartItems: state => state.cartItems,
    cartTotal: state => {
        return state.cartItems.reduce((acc, cartItem) => {
            return (cartItem.quantity * cartItem.price) + acc;
        }, 0).toFixed(2);
    },
    cartQuantity: state => {
        return state.cartItems.reduce((acc, cartItem) => {
            return cartItem.quantity + acc;
        }, 0);
    }
}
const cartModule = {
    state,
    mutations,
    actions,
    getters
}
export default cartModule;
```
- Modules/Product資料夾的建置  
	- 在`product`資料夾內建立`index.js`檔案並放入以下資料
![](https://i.imgur.com/fjc2vvL.png)
```javascript=
import axios from 'axios';
const state = {
  productItems: [],
  serverPath: "http://localhost:8000/"
}

const mutations = {
  UPDATE_PRODUCT_ITEMS(state, payload) {
    state.productItems = payload;
  }
}

const actions = {
  getProductItems({ commit }) {
    axios.get(`/api/products`).then((response) => {
      commit('UPDATE_PRODUCT_ITEMS', response.data)
    });
  }
}

const getters = {
  productItems: state => state.productItems,
  productItemById: (state) => (id) => {
    return state.productItems.find(productItem => productItem.id === id)
  }
}
const productModule = {
  state,
  mutations,
  actions,
  getters
}

export default productModule;
```
- Store/index.js設定	
	- 更改`src/store/index.js`的內容
![](https://i.imgur.com/h1OJsvo.png)
```javascript=
import { createStore } from 'vuex'
import product from'./modules/product';
import cart from './modules/cart';

export default createStore({
  modules: {
    product,
    cart
  }
})
```
3. 將APP.vue的設定更改為以下資料
![](https://i.imgur.com/ewaFC7G.png)
```javascript=
<template>
  <div>
    <Navbar/>
    <div class="container mt-6">
      <div class="columns">
        <div class="column is-12 column--align-center">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from './components/core/Navbar'
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>
<style>
html,
body {
  height: 100%;
  background: #f2f6fa;
}
</style>

```
4. 將router資料夾內的index.js設定更改為以下資料
![](https://i.imgur.com/GrU74GP.png)

```javascript=
import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CartList from '../components/cart/Cart_List.vue';
import ProductList from '../components/product/Product_List.vue';

const routes = [
  {
    path:'/home',
    name:'HomeView',
    component: HomeView
  },
  {
    path: '/inventory',
    component: ProductList
  },
  {
    path: '/cart',
    component: CartList
  },
  {
    path: '/',
    redirect: '/inventory'
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
```
5. Components設定
- 在Components資料夾內分別建立三個資料夾	
	分別為`core`、`cart`和`product`。
	![](https://i.imgur.com/Qd3ro2H.png)
6. Core資料夾的設置
- 在裡面建立`Navbar.vue`並輸入以下內容
![](https://i.imgur.com/9GAxeh9.png)
 ```javascript=
<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a
                role="button"
                class="navbar-burger burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
            >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <router-link to="/inventory" class="button is-primary">
                            <strong>Inventory</strong>
                        </router-link>
                        <router-link to="/cart" class="button is-warning">
                            <p>
                                Total cart items:
                                <span>{{ cartQuantity }}</span>
                            </p>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
import { mapGetters } from "vuex"
export default {
    name: "Navbar",
    computed: {
        ...mapGetters([
            'cartQuantity'
        ])
    },
    created() {
        this.$store.dispatch("getCartItems");
    }
}
</script>
 ```

7.  Cart資料夾的設置
- 在裡面分別建立`Cart_List_Item.vue`以及`Cart_List.vue`
![](https://i.imgur.com/8vXo61K.png) 
- `Cart_List_Item.vue` 設定
 ```javascript=
<template>
    <div class="box">
        <div class="cart-item__details">
            <p class="is-inline">{{ cartItem.title }}</p>
            <div>
                <span
                    class="cart-item--price has-text-info has-text-weight-bold"
                >${{ cartItem.price }} X {{ cartItem.quantity }}</span>

                <span>
                    <i
                        class="fa fa-arrow-circle-up cart-item__modify"
                        @click="addCartItem(cartItem)"
                    ></i>
                    <i
                        class="fa fa-arrow-circle-down cart-item__modify"
                        @click="removeCartItem(cartItem.id)"
                    ></i>
                </span>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
    name: 'CartListItem',
    props: ['cartItem'],
    methods: {
        ...mapActions([
            'addCartItem',
            'removeCartItem'
        ])
    }
}
</script>
 ```
 - `Cart_List.vue` 設定
 ```javascript=
<template>
    <div id="cart">
        <div class="cart--header has-text-centered">
            <i class="fa fa-2x fa-shopping-cart"></i>
        </div>
        <p
            v-if="!cartItems.length"
            class="cart-empty-text has-text-centered"
        >Add some items to the cart!</p>
        <ul>
            <li class="cart-item" v-for="cartItem in cartItems" :key="cartItem.id">
                <CartListItem :cartItem="cartItem" />
            </li>
            <div class="notification is-success">
                <button class="delete"></button>
                <p>
                    Total Quantity:
                    <span class="has-text-weight-bold">{{ cartQuantity }}</span>
                </p>
            </div>
            <br />
        </ul>
        <div class="buttons">
            <button :disabled="!cartItems.length" class="button is-info">
                Checkout (
                <span class="has-text-weight-bold">${{ cartTotal }}</span>)
            </button>

            <button class="button is-danger is-outlined" @click="removeAllCartItems">
                <span>Delete All items</span>
                <span class="icon is-small">
                    <i class="fas fa-times"></i>
                </span>
            </button>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import CartListItem from "./Cart_List_Item";
export default {
    name: "CartList",
    components: {
        CartListItem
    },
    computed: {
        ...mapGetters(["cartItems", "cartTotal", "cartQuantity"]),
    },
    created() {
        this.$store.dispatch("getCartItems");
    },
    methods: {
        ...mapActions(["removeAllCartItems"]),
    }
};
</script>
 ```
8.  Product資料夾的設置
- 在裡面分別建立`Product_List_Item.vue`以及`Product_List.vue`
![](https://i.imgur.com/nkbHcdX.png)


- `Product_List_Item.vue` 設定
 ```javascript=
<template>
    <div class="card">
        <div class="card-content">
            <div class="content">
                <h4>{{ productItem.title }}</h4>
                <a class="button is-rounded is-pulled-left" @click="addCartItem(productItem)">
                    <strong>Add to Cart</strong>
                </a>
                <br />
                <p class="mt-4">{{ productItem.description }}</p>
            </div>
            <div class="media">
                <div class="media-content">
                    <p class="title is-6">{{ productItem.owner }}</p>
                    <p class="subtitle is-7">{{ productItem.email }}</p>
                </div>
                <div class="media-right">
                    <a class="button is-primary is-light">
                        <strong>$ {{ productItem.price }}</strong>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    name: "ProductListItem",
    props: ["productItem"],
    methods: {
        ...mapActions(["addCartItem"]),
    },
};
</script>
 ```
 - `Product_List.vue` 設定
 ```javascript=
<template>
    <div class="container is-fluid">
        <div class="tile is-ancestor">
            <div class="tile is-parent" v-for="productItem in productItems" :key="productItem.id">
                <ProductListItem :productItem="productItem" />
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import Product_List_Item from './Product_List_Item'
export default {
    name: "ProductList",
    components: {
        ProductListItem: Product_List_Item
    },
    computed: {
        ...mapGetters([
            'productItems'
        ])
    },
    created() {
        this.$store.dispatch('getProductItems');
    }
};
</script>

 ```
 
## Step6:Vue購物車啟動
恭喜以上完成後確認你的Node後台是否有繼續執行
接著執行你的Vue即可


---

參考資料：[如何使用Vue 3和Vuex構建購物車](https://www.digitalocean.com/community/tutorials/how-to-build-a-shopping-cart-with-vue-3-and-vuex#step-4-creating-interface-components)
