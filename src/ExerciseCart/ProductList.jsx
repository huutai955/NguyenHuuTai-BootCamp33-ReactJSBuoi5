import React, { Component } from 'react';
import '../assests/style.css';
import ProductItem from './ProductItem';

export default class ProductList extends Component {
    state = {
        infor: { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" }
    }

    checkInfor = (data) => {
        return this.setState({
            infor: data
        })
    }
    render() {
        const { productData, addProduct } = this.props;

        let renderPhone = (arr) => {
            return arr.map((phone, index) => {
                return <ProductItem key={index} phoneData={phone} checkInfor={this.checkInfor} addProduct={addProduct} />
            })
        }


        const { tenSP, manHinh, heDieuHanh, cameraTruoc, cameraSau, ram, rom, hinhAnh } = this.state.infor



        return (
            <div className='container'>
                <div className="product-list">
                    <div className="row">
                        {/* <div className="col-4">
                    <div className="card">
                        <img src='./img/applephone.jpg' alt="" />
                        <div className="card-body">
                            <h3>VinSMart</h3>
                            <div className="button-form mt-4">
                            <button className='btn btn-success me-3'>Xem Chi Tiết</button>
                            <button className='btn btn-danger'>Thêm Giỏ Hàng</button>
                            </div>
                        </div>
                    </div>
                </div> */}
                        {renderPhone(productData)}
                    </div>
                </div>
                <div className="product-infor mt-5">
                    <div className="row">
                        <div className="col-4 text-center">
                            <h2>{tenSP}</h2>
                            <img className='w-100' src={hinhAnh} alt="" />
                        </div>
                        <div className="col-8">
                            <h2>Thông Số Kỹ Thuật</h2>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>Màn Hình</th>
                                        <td>{manHinh}</td>
                                    </tr>
                                    <tr>
                                        <th>Hệ Điều Hành</th>
                                        <td>{heDieuHanh}</td>
                                    </tr>
                                    <tr>
                                        <th>Camera Trước</th>
                                        <td>{cameraTruoc}</td>
                                    </tr>
                                    <tr>
                                        <th>Camera Sau</th>
                                        <td>{cameraSau}</td>
                                    </tr>
                                    <tr>
                                        <th>RAM</th>
                                        <td>{ram}</td>
                                    </tr>
                                    <tr>
                                        <th>ROM</th>
                                        <td>{rom}</td>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
