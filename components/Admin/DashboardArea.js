import { useState, useEffect } from 'react';
import axios from 'axios';
import baseUrl from '../../utils/baseUrl';
import formatDate from "../../utils/formatDate";
import ProductModal from '../Product/ProductModal';
import Link from 'next/link';
import { useRouter } from 'next/router';

const DashboardArea = ({ products, totalPages }) => {
    const [show, setShow] = useState(false);
    const router = useRouter();

    //set products after delete or edit
    const [newProducts, setNewProducts] = useState('');

    //sending selected products to modal
    const [editProduct, setEditProduct] = useState('');

    let page = parseInt(router.query.page) ? parseInt(router.query.page) : 1;
    
    useEffect(()=>{
        setNewProducts(products);
    },[page]);

    const eProduct = (product) => {
        setNewProducts(product);
    };

    const handleDelete = (productId) => {
        const url = `${baseUrl}/api/v1/products/${productId}`;
        const deleteProduct = async () => {
            const response =  await axios.delete(url);
            setNewProducts(response.data.products);
        };
        deleteProduct();
    };

    const handleShow = (prod) => {
        setEditProduct(prod);
        setShow(true);
    };

    const handleClose = () => setShow(false);

    return (
        <>
            <div className='dashboard-area ptb-100'>
                <div className='container'>
                    <div className='dashboard-table'>
                        <div className='title'>
                            <div className="row">
                                <div className="col-6">
                                    <h3>All Products</h3>
                                </div>
                                <div className="col-6 text-end">
                                    <Link href="/product/create/">
                                        <a className="btn btn-dark btn-sm mb-2">
                                            Create Product
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className='table-responsive'>
                            <table className='table table-striped align-middle table-hover fs-15'>
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Date</th>
                                        <th>Price</th>
                                        <th>Category</th>
                                        <th>In Stock</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {newProducts.length > 0 ? newProducts.map((product) => (
                                        <tr key={product.id}>
                                            <td className='table-img'>
                                                <Link href={`/product/${product.id}`}>
                                                    <a className='d-block'>
                                                        <img 
                                                            src={product.img_url} 
                                                            alt='image' 
                                                            width="40" 
                                                        />
                                                    </a>
                                                </Link>
                                            </td>

                                            <td>
                                                <Link href={`/product/${product.id}`}>
                                                    <a>
                                                        {product.title}
                                                    </a>
                                                </Link>
                                            </td>   

                                            <td>{formatDate(product.createdAt)}</td>

                                            <td>${product.price}</td>

                                            <td>{product.category}</td>

                                            <td>{product.availability}</td>

                                            <td>
                                                <button
                                                    className='btn btn-danger btn-sm fs-12'
                                                    onClick={() => handleDelete(product.id)}
                                                >
                                                    Delete
                                                </button> {' '}

                                                <button
                                                    className='btn btn-primary btn-sm fs-12'
                                                    onClick={() => handleShow(product)}
                                                >
                                                    Edit
                                                </button> {' '}

                                                <Link href={`/product/${product.id}`}>
                                                    <a className="btn btn-secondary btn-sm fs-12" target="_blank">View</a>
                                                </Link>
                                            </td>
                                        </tr>
                                    ))
                                    :<tr className="empty-tr">
                                        <td colSpan="7">No Product!</td>
                                    </tr>}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* <div className='col-lg-12 col-sm-12 col-md-12'>
                        <div className="pagination-area">
                            <div className="nav-links">
                                <a href="#" className="previous page-numbers" title="Next Page">
                                    <i className="fas fa-arrow-left"></i>
                                </a>
                                <span className="page-numbers current">1</span>
                                <a href="#" className="page-numbers">2</a>
                                <a href="#" className="page-numbers">3</a>
                                <a href="#" className="page-numbers">4</a>
                                <a href="#" className="next page-numbers" title="Next Page">
                                    <i className="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div> */}
                </div>
            
                <ProductModal
                    show={show}
                    handleClose={handleClose}
                    product={editProduct}
                    eProduct={eProduct}
                />
            </div>
        </>
    );
};

export default DashboardArea;