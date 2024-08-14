import React, { useState, useEffect } from 'react';
import Header from '../homepage_components/Header';
import Footer from '../homepage_components/Footer';
import '../gallerypage_components/GalleryPage.css';

const productsData = [
  { id: 1, name: 'Frog\'s Island Retreat', img: '/image/Gallery/work1.jpg', categories: ['Succulents'] },
  { id: 2, name: 'Mystic Thorn', img: '/image/Gallery/work2.jpg', categories: ['Succulents'] },
  { id: 3, name: 'Blossom Reverie', img: '/image/Gallery/work3.jpg', categories: ['House Plants','Ferns','Moss'] },
  { id: 4, name: 'Magic Forest', img: '/image/Gallery/work4.jpg', categories: ['Succulents'] },
  { id: 5, name: 'Mushroom House', img: '/image/Gallery/work5.jpg', categories: ['Succulents'] },
  { id: 6, name: 'Tiny Me', img: '/image/Gallery/work6.jpg', categories: ['Moss'] },
  { id: 7, name: '', img: '/image/Gallery/work7.jpg', categories: ['Moss'] },
  { id: 8, name: '', img: '/image/Gallery/work8.jpg', categories: ['Moss', 'Ferns'] },
  { id: 9, name: '', img: '/image/Gallery/work9.jpg', categories: ['House Plants','Ferns'] },
  { id: 10, name: '', img: '/image/Gallery/work10.jpeg', categories: ['Succulents'] },
  { id: 11, name: '', img: '/image/Gallery/work11.jpeg', categories: ['Air Plants'] },
  { id: 12, name: '', img: '/image/Gallery/work12.jpg', categories: ['House Plants','Ferns'] },
  { id: 13, name: '', img: '/image/Gallery/work13.jpg', categories: ['Moss', 'Ferns'] },
  { id: 14, name: '', img: '/image/Gallery/work14.jpeg', categories: ['Moss'] },
  { id: 15, name: '', img: '/image/Gallery/work15.jpeg', categories: ['Moss','Ferns'] },
  { id: 16, name: '', img: '/image/Gallery/work16.jpg', categories: ['Moss', 'Ferns'] },
  { id: 17, name: '', img: '/image/Gallery/work17.jpg', categories: ['House Plants','Ferns'] },
  { id: 18, name: '', img: '/image/Gallery/work18.jpg', categories: ['Moss','Ferns'] },
  { id: 19, name: '', img: '/image/Gallery/work19.jpg', categories: ['House Plants','Ferns'] },
  { id: 20, name: '', img: '/image/Gallery/work20.jpg', categories: ['House Plants','Ferns'] },
  { id: 21, name: '', img: '/image/Gallery/work21.jpg', categories: ['House Plants','Ferns'] },
];

const GalleryPage = () => {
  const [products] = useState(productsData);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(9);
  const [currentCategory, setCurrentCategory] = useState('ALL');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
    setCurrentPage(1); // Reset to the first page when category changes
  };

  const filteredProducts = currentCategory === 'ALL'
    ? products
    : products.filter(product => product.categories.includes(currentCategory));

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handleClickNext = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
  };

  const handleClickPrev = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  return (
    <div>
      <Header />
      <main className="gallery-page">
        <h1 className='gallery-h1'>Our Gallery</h1>
        <p className='gallery-subtitle'>Where Nature Meets Creativity 🌿</p>
        <div className="category-tabs">
          {['ALL', 'Moss', 'House Plants', 'Succulents', 'Air Plants', 'Ferns'].map(category => (
            <button
              key={category}
              className={`category-tab ${category === currentCategory ? 'active' : ''}`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="product-container">
          <div className="product-grid">
            {currentProducts.map(product => (
              <div key={product.id} className="product-card">
                <img src={product.img} alt={product.name} />
              </div>
            ))}
          </div>
        </div>
        <div className="pagination">
          <button onClick={handleClickPrev} disabled={currentPage === 1}>&laquo;</button>
          <span>Page {currentPage} of {totalPages}</span>
          <button onClick={handleClickNext} disabled={currentPage === totalPages}>&raquo;</button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;
