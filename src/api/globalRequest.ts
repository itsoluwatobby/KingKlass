import axios from 'axios';
import { Endpoints } from './endpoints'

const BASEURL = 'http://web-02.obimbasmart.tech'

const requests = axios.create(
  {
    baseURL: BASEURL,
    headers: {
      'Content-Type': 'application/json'
    },
    // withCredentials: true
  }
)

const Authorization_token = typeof window !== 'undefined' ? window.localStorage.getItem('King_Klass_Pass') : null;

export const login = async(user: Partial<UserInfo>) => {
  const path = Endpoints({});
  const userCredential = await requests[path.login.method](path.login.url, user);
  return userCredential.data;
}
export const register = async(user: Partial<UserInfo>) => {
  const path = Endpoints({});
  const userCredential = await requests[path.createUser.method](path.createUser.url, user);
  return userCredential.data;
}
export const getUser = async(userId: string) => {
  const path = Endpoints({ userId });
  const user = await requests[path.getUser.method](path.getUser.url, {
    headers: {
      'Authorization': `Bearer ${Authorization_token}`
    }
  });
  return user.data;
}
export const getUsers = async() => {
  const path = Endpoints({});
  const user = await requests[path.users.method](path.users.url, {
    headers: {
      'Authorization': `Bearer ${Authorization_token}`
    }
  });
  return user.data;
}
export const getUserOrders = async(userId: string) => {
  const path = Endpoints({ userId });
  const userOrders = await requests[path.getUserOrders.method](path.getUserOrders.url, {
    headers: {
      'Authorization': `Bearer ${Authorization_token}`
    }
  });
  return userOrders.data;
}
export const createUserOrder = async<T extends object>(userId: string, newOrder: T) => {
  const path = Endpoints({ userId });
  const newUserOrder = await requests[path.createUserOrder.method](path.createUserOrder.url, {...newOrder}, {
    headers: {
      'Authorization': `Bearer ${Authorization_token}`
    }
  });
  return newUserOrder.data;
}
export const getUserOrder = async(userId: string, orderId: string) => {
  const path = Endpoints({ userId, orderId });
  const userOrder = await requests[path.getUserOrder.method](path.getUserOrder.url, {
    headers: {
      'Authorization': `Bearer ${Authorization_token}`
    }
  });
  return userOrder.data;
}
export const updateUserOrder = async<T extends object>(orderId: string, updatedOrder: T) => {
  const path = Endpoints({ orderId });
  const userOrder = await requests[path.updateUserOrder.method](path.updateUserOrder.url, {...updatedOrder}, {
    headers: {
      'Authorization': `Bearer ${Authorization_token}`
    }
  });
  return userOrder.data;
}
export const deleteUserOrder = async(orderId: string) => {
  const path = Endpoints({ orderId });
  const userOrder = await requests[path.deleteUserOrder.method](path.deleteUserOrder.url, {
    headers: {
      'Authorization': `Bearer ${Authorization_token}`
    }
  });
  return userOrder.data;
}
export const createCategory = async<T extends object>(newCategory: T) => {
  const path = Endpoints({});
  const category = await requests[path.createCategory.method](path.createCategory.url, {...newCategory}, {
    headers: {
      'Authorization': `Bearer ${Authorization_token}`
    }
  });
  return category.data;
}
export const getCategories = async() => {
  const path = Endpoints({});
  const categories = await requests[path.getCategories.method](path.getCategories.url, {
    headers: {
      'Authorization': `Bearer ${Authorization_token}`
    }
  });
  return categories.data;
}
export const getCategory = async(categoryId: string) => {
  const path = Endpoints({ categoryId });
  const category = await requests[path.getCategory.method](path.getCategory.url, {
    headers: {
      'Authorization': `Bearer ${Authorization_token}`
    }
  });
  return category.data;
}
export const getOrders = async() => {
  const path = Endpoints({});
  const orders = await requests[path.getOrders.method](path.getOrders.url, {
    headers: {
      'Authorization': `Bearer ${Authorization_token}`
    }
  });
  return orders.data;
}
export const getOrdersStatus = async(status: OrderStatusType) => {
  const path = Endpoints({ status });
  const orderStatus = await requests[path.getOrdersStatus.method](path.getOrdersStatus.url, {
    headers: {
      'Authorization': `Bearer ${Authorization_token}`
    }
  });
  return orderStatus.data;
}
export const getOrder = async(orderId: string) => {
  const path = Endpoints({ orderId });
  const order = await requests[path.getOrder.method](path.getOrder.url, {
    headers: {
      'Authorization': `Bearer ${Authorization_token}`
    }
  });
  return order.data;
}
export const updateOrder = async<T extends object>(orderId: string, updatedOrder: T) => {
  const path = Endpoints({ orderId });
  const order = await requests[path.updateOrder.method](path.updateOrder.url, {...updatedOrder}, {
    headers: {
      'Authorization': `Bearer ${Authorization_token}`
    }
  });
  return order.data;
}
export const deleteOrder = async(orderId: string) => {
  const path = Endpoints({ orderId });
  const deletedOrder = await requests[path.deleteOrder.method](path.deleteOrder.url, {
    headers: {
      'Authorization': `Bearer ${Authorization_token}`
    }
  });
  return deletedOrder.data;
}
export const getProducts = async() => {
  const path = Endpoints({});
  const products = await requests[path.getProducts.method](path.getProducts.url);
  return products.data;
}

export const getProduct = async(productId: string) => {
  const path = Endpoints({ productId });
  const product = await requests[path.getProduct.method](path.getProduct.url, {
    headers: {
      'Authorization': `Bearer ${Authorization_token}`
    }
  });
  return product.data;
}
export const createProduct = async<T extends object>(newProduct: T) => {
  const path = Endpoints({});
  const product = await requests[path.createProduct.method](path.createProduct.url, {...newProduct}, {
    headers: {
      'Authorization': `Bearer ${Authorization_token}`
    }
  });
  return product.data;
}
export const updateProduct = async<T extends object>(productId: string, updatedProduct: T) => {
  const path = Endpoints({ productId });
  const product = await requests[path.updateProduct.method](path.updateProduct.url, {...updatedProduct}, {
    headers: {
      'Authorization': `Bearer ${Authorization_token}`
    }
  });
  return product.data;
}
export const deleteProduct = async(productId: string) => {
  const path = Endpoints({ productId });
  const product = await requests[path.deleteProduct.method](path.deleteProduct.url, {
    headers: {
      'Authorization': `Bearer ${Authorization_token}`
    }
  });
  return product.data;
}
export const getReviews = async(productId: string) => {
  const path = Endpoints({ productId });
  const productReviews = await requests[path.getReviews.method](path.getReviews.url, {
    headers: {
      'Authorization': `Bearer ${Authorization_token}`
    }
  });
  return productReviews.data;
}
export const getReview = async(reviewId: string) => {
  const path = Endpoints({ reviewId });
  const review = await requests[path.getReview.method](path.getReview.url, {
    headers: {
      'Authorization': `Bearer ${Authorization_token}`
    }
  });
  return review.data;
}
export const deleteReview = async(reviewId: string) => {
  const path = Endpoints({ reviewId });
  const review = await requests[path.deleteReview.method](path.deleteReview.url, {
    headers: {
      'Authorization': `Bearer ${Authorization_token}`
    }
  });
  return review.data;
}
export const getAllReviews = async() => {
  const path = Endpoints({});
  const allReviews = await requests[path.getAllReviews.method](path.getAllReviews.url, {
    headers: {
      'Authorization': `Bearer ${Authorization_token}`
    }
  });
  return allReviews.data;
}
export const createReview = async<T extends object>(productId: string, newReview: T) => {
  const path = Endpoints({ productId });
  const review = await requests[path.createReview.method](path.createReview.url, {...newReview}, {
    headers: {
      'Authorization': `Bearer ${Authorization_token}`
    }
  });
  return review.data;
}
export const updateReview = async<T extends object>(reviewId: string, updatedReview: T) => {
  const path = Endpoints({ reviewId });
  const review = await requests[path.updateReview.method](path.updateReview.url, {...updatedReview}, {
    headers: {
      'Authorization': `Bearer ${Authorization_token}`
    }
  });
  return review.data;
}
export const getProductReview = async(reviewId: string) => {
  const path = Endpoints({ reviewId });
  const review = await requests[path.getProductReview.method](path.getProductReview.url, {
    headers: {
      'Authorization': `Bearer ${Authorization_token}`
    }
  });
  return review.data;
}
