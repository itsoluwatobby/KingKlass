

type EndpointParams = {
  orderId?: string; 
  userId?: string; 
  reviewId?: string; 
  productId?: string; 
  categoryId?: string;
  status?: OrderStatusType;
}
type Method = 'get' | 'post' | 'put' | 'delete' | 'patch';
type Paths = 'login' | 'users' | 'register' | 'createUser' | 'getUser' | 'getUserOrders' | 'createUserOrder' | 'getUserOrder' | 'updateUserOrder' | 'deleteUserOrder' | 'createCategory' | 'getCategories' | 'getCategory' | 'getOrders' | 'getOrdersStatus' | 'getOrder' | 'updateOrder' | 'deleteOrder' | 'getProducts' | 'getProduct' | 'createProduct' | 'updateProduct' | 'deleteProduct' | 'getReviews' | 'getReview' | 'deleteReview' | 'getAllReviews' | 'createReview' | 'updateReview' | 'getProductReview';
export const Endpoints = ({ orderId='', userId='', reviewId='', productId='', categoryId='', status='Pending' }: EndpointParams): Record<Paths, {method: Method, url: string}> => {
  const urlPath = '/api/v1' as const;

  return {
    users: {
      method: 'get',  url: urlPath+'/users'
    },
    login: {
      method: 'post',  url: '/login'
    },
    register: {
      method: 'post',  url: urlPath+'/register'
    },
    createUser: {
      method: 'post', url: `${urlPath}/users` // all users
    },
    getUser: {
      method: 'get', url: `${urlPath}/users/${userId}` // single user
    },
    getUserOrders: {
      method: 'get', url: `${urlPath}/users/${userId}/orders` // single user orders
    },
    createUserOrder: {// to be corrected
      method: 'post', url: `${urlPath}/users/${userId}/orders` // create user order
    },
    getUserOrder: {
      method: 'get', url: `${urlPath}/users/${userId}/orders/${orderId}` // single user target order
    },
    updateUserOrder: {
      method: 'put', url: `${urlPath}/order/${orderId}` // update order
    },
    deleteUserOrder: {
      method: 'delete', url: `${urlPath}/order/${orderId}` // update order
    },
    createCategory: {
      method: 'post',  url: `${urlPath}/categories`
    }, // CATEGORY ROUTES
    getCategories: {
      method: 'get',  url: `${urlPath}/categories`
    },
    getCategory: {
      method: 'get', url: `${urlPath}/categories/${categoryId}/products`
    },
    getOrders: {
      method: 'get', url: `${urlPath}/orders`
    }, // ORDER ROUTES
    getOrdersStatus: {
      method: 'get', url: `${urlPath}/orders/${status}`
    },
    getOrder: {
      method: 'get', url: `${urlPath}/orders/${orderId}`
    },
    updateOrder: {
      method: 'put', url: `${urlPath}/orders/${orderId}`
    },
    deleteOrder: {
      method: 'delete', url: `${urlPath}/orders/${orderId}`
    },
    getProducts: {
      method: 'get', url: `${urlPath}/products`
    }, // PRODUCTS ROUTES
    getProduct: {
      method: 'get', url: `${urlPath}/products/${productId}`
    },
    createProduct: {
      method: 'post', url: `${urlPath}/products`
    },
    updateProduct: {
      method: 'put', url: `${urlPath}/products/${productId}`
    },
    deleteProduct: {
      method: 'delete', url: `${urlPath}/products/${productId}`
    },
    getReviews: {
      method: 'get', url: `${urlPath}/products/${productId}/reviews` // product reviews
    },
    getReview: {
      method: 'get', url: `${urlPath}/reviews/${reviewId}` // single review
    },
    deleteReview: {
      method: 'delete', url: `${urlPath}/reviews/${reviewId}` // delete single review
    },
    getAllReviews: {
      method: 'get', url: `${urlPath}/reviews` // all reviews
    },
    createReview: {
      method: 'post', url: `${urlPath}/products/${productId}/reviews`
    },
    updateReview: {
      method: 'put', url: `${urlPath}/reviews/${reviewId}` // update review
    },
    getProductReview: {
      method: 'get', url: `${urlPath}/reviews/${reviewId}/product` // get product review
    }
  }
};