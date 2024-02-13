
export const urlPath = '/api/v1' as const;

export const Endpoints = ({ orderId='', userId='', reviewId='', productId='', categoryId='', status='Pending' }) => {

  return {
    users: {
      method: 'GET',  url:'/users'
    },
    login: {
      method: 'POST',  url: '/login'
    },
    createUser: {
      method: 'POST', url: `/users` // all users
    },
    getUser: {
      method: 'GET', url: `/users/${userId}` // single user
    },
    getUserOrders: {
      method: 'GET', url: `/users/${userId}/orders` // single user orders
    },
    createUserOrder: {// to be corrected
      method: 'POST', url: `/users/${userId}/orders` // create user order
    },
    getUserOrder: {
      method: 'GET', url: `/users/${userId}/orders/${orderId}` // single user target order
    },
    updateUserOrder: {
      method: 'PUT', url: `/order/${orderId}` // update order
    },
    deleteUserOrder: {
      method: 'DELETE', url: `/order/${orderId}` // update order
    },
    createCategory: {
      method: 'POST',  url: '/categories'
    }, // CATEGORY ROUTES
    getCategories: {
      method: 'GET',  url: '/categories'
    },
    getCategory: {
      method: 'GET', url: `/categories/${categoryId}/products`
    },
    getOrders: {
      method: 'GET', url: '/orders'
    }, // ORDER ROUTES
    getOrdersStatus: {
      method: 'GET', url: `/orders/${status}`
    },
    getOrder: {
      method: 'GET', url: `/orders/${orderId}`
    },
    updateOrder: {
      method: 'PUT', url: `/orders/${orderId}`
    },
    deleteOrder: {
      method: 'DELETE', url: `/orders/${orderId}`
    },
    getProducts: {
      method: 'GET', url: '/products'
    }, // PRODUCTS ROUTES
    getProduct: {
      method: 'GET', url: `/products/${productId}`
    },
    createProduct: {
      method: 'POST', url: `/products`
    },
    updateProduct: {
      method: 'PUT', url: `/products/${productId}`
    },
    deleteProduct: {
      method: 'DELETE', url: `/products/${productId}`
    },
    getReviews: {
      method: 'GET', url: `/products/${productId}/reviews` // all product reviews
    },
    getReview: {
      method: 'GET', url: `/reviews/${reviewId}` // single review
    },
    deleteReview: {
      method: 'DELETE', url: `/reviews/${reviewId}` // delete single review
    },
    getAllReviews: {
      method: 'GET', url: `/reviews` // all reviews
    },
    createReview: {
      method: 'POST', url: `/products/${productId}/reviews`
    },
    updateReview: {
      method: 'PUT', url: `/reviews/${reviewId}` // update review
    },
    getProductReview: {
      method: 'GET', url: `/reviews/${reviewId}/product` // get product review
    }
  }
};