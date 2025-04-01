import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetailsPage = ({ products }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    // Find the product by id
    const productId = parseInt(id);
    const foundProduct = products.find(p => p.id === productId);
    
    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [id, products]);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
        <p className="text-gray-600 mb-6">Sorry, we couldn't find the product you're looking for.</p>
        <Link 
          to="/" 
          className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
        >
          Return to Home
        </Link>
      </div>
    );
  }

  // Handle quantity change
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    setQuantity(value < 1 ? 1 : value);
  };

  // Handle add to cart
  const handleAddToCart = () => {
    alert(`Added ${quantity} ${product.name}(s) to cart!`);
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="flex mb-8">
        <ol className="flex items-center space-x-2">
          <li>
            <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
          </li>
          <li>
            <span className="text-gray-500 mx-2">/</span>
          </li>
          <li>
            <Link to="/#products" className="text-gray-500 hover:text-gray-700">Products</Link>
          </li>
          <li>
            <span className="text-gray-500 mx-2">/</span>
          </li>
          <li className="text-gray-900 font-medium">{product.name}</li>
        </ol>
      </nav>

      {/* Product detail section */}
      <div className="flex flex-col lg:flex-row -mx-4">
        {/* Product image */}
        <div className="lg:w-1/2 px-4 mb-8 lg:mb-0">
          <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center">
            <img 
              src={product.image} 
              alt={product.name} 
              className="max-w-full h-auto max-h-96 object-contain"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="lg:w-1/2 px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
          
          <div className="flex items-center mb-6">
            <div className="flex text-yellow-400 mr-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-600">4.8 (42 reviews)</span>
          </div>
          
          <p className="text-3xl font-bold text-gray-900 mb-6">${product.price.toFixed(2)}</p>
          
          <p className="text-gray-600 mb-6">{product.description}</p>
          
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-900 mb-2">Features:</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-900 mb-2">Availability:</h3>
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>
          
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mr-4">
                Quantity:
              </label>
              <div className="flex">
                <button 
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  className="border border-gray-300 px-3 py-1 bg-gray-100 hover:bg-gray-200"
                >
                  -
                </button>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="1"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="w-16 text-center border-t border-b border-gray-300 py-1"
                />
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="border border-gray-300 px-3 py-1 bg-gray-100 hover:bg-gray-200"
                >
                  +
                </button>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className={`flex-1 px-6 py-3 rounded-md font-medium text-white ${product.inStock ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'}`}
              >
                Add to Cart
              </button>
              <button className="px-4 py-3 border border-gray-300 rounded-md hover:bg-gray-50">
                <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-6">
            <div className="flex space-x-8 mb-4">
              <button
                className={`pb-2 text-sm font-medium ${activeTab === 'description' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('description')}
              >
                Description
              </button>
              <button
                className={`pb-2 text-sm font-medium ${activeTab === 'specifications' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('specifications')}
              >
                Specifications
              </button>
              <button
                className={`pb-2 text-sm font-medium ${activeTab === 'reviews' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('reviews')}
              >
                Reviews
              </button>
            </div>
            
            {activeTab === 'description' && (
              <div className="text-gray-600">
                <p className="mb-4">
                  {product.description} This premium product is designed to provide the best experience for users who demand quality and performance.
                </p>
                <p>
                  With its sleek design and advanced features, this product stands out from the competition. Made with high-quality materials and built to last, it's a worthwhile investment for anyone looking to enhance their tech collection.
                </p>
              </div>
            )}
            
            {activeTab === 'specifications' && (
              <div className="text-gray-600">
                <ul className="border rounded-md divide-y">
                  <li className="flex py-3 px-4">
                    <span className="font-medium text-gray-900 w-1/3">Model</span>
                    <span className="w-2/3">{product.name} Pro</span>
                  </li>
                  <li className="flex py-3 px-4">
                    <span className="font-medium text-gray-900 w-1/3">Color</span>
                    <span className="w-2/3">Space Gray</span>
                  </li>
                  <li className="flex py-3 px-4">
                    <span className="font-medium text-gray-900 w-1/3">Dimensions</span>
                    <span className="w-2/3">10 x 5 x 2 inches</span>
                  </li>
                  <li className="flex py-3 px-4">
                    <span className="font-medium text-gray-900 w-1/3">Weight</span>
                    <span className="w-2/3">0.5 lbs</span>
                  </li>
                  <li className="flex py-3 px-4">
                    <span className="font-medium text-gray-900 w-1/3">Warranty</span>
                    <span className="w-2/3">1 Year Limited</span>
                  </li>
                </ul>
              </div>
            )}
            
            {activeTab === 'reviews' && (
              <div className="text-gray-600">
                <div className="mb-6">
                  <div className="flex items-start mb-4">
                    <div className="mr-4">
                      <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                        <span className="font-medium text-gray-700">JD</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center mb-1">
                        <h4 className="font-medium text-gray-900 mr-2">Devansh Mittal</h4>
                        <span className="text-sm text-gray-500">2 days ago</span>
                      </div>
                      <div className="flex text-yellow-400 mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p>This product exceeds all my expectations. The quality is amazing and it works perfectly!</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4">
                      <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                        <span className="font-medium text-gray-700">JS</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center mb-1">
                        <h4 className="font-medium text-gray-900 mr-2">Jai Vdula</h4>
                        <span className="text-sm text-gray-500">1 week ago</span>
                      </div>
                      <div className="flex text-yellow-400 mb-2">
                        {[1, 2, 3, 4].map((star) => (
                          <svg key={star} className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <svg className="h-4 w-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <p>Good product overall, but I wish it had a longer battery life. Still, I'm happy with my purchase.</p>
                    </div>
                  </div>
                </div>
                
                <button className="text-blue-600 font-medium hover:text-blue-800">
                  View all reviews
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Related products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">You might also like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.filter(p => p.id !== product.id).slice(0, 4).map(relatedProduct => (
            <div key={relatedProduct.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={relatedProduct.image} 
                alt={relatedProduct.name} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">{relatedProduct.name}</h3>
                <p className="text-gray-500 mb-4">${relatedProduct.price.toFixed(2)}</p>
                <Link 
                  to={`/product/${relatedProduct.id}`}
                  className="text-blue-600 font-medium hover:text-blue-800"
                >
                  View details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;