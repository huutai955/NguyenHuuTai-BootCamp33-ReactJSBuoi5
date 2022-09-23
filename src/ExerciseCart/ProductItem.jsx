import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        const {hinhAnh, tenSP} = this.props.phoneData;
        return (
            <div className="col-4 mt-2">
                <div className="card">
                    <img src={hinhAnh} alt="" height={400} />
                    <div className="card-body">
                        <h3>{tenSP}</h3>
                        <div className="button-form mt-4">
                            <button className='btn btn-success me-3' onClick={() => {
                                return this.props.checkInfor(this.props.phoneData);
                            }}>Xem Chi Tiết</button>
                            <button className='btn btn-danger' onClick={() => {
                                return this.props.addProduct(this.props.phoneData)
                            }}>Thêm Giỏ Hàng</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
