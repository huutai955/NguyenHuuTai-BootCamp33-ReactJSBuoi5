import React, { Component } from 'react'
import Cart from './Cart'
import ProductList from './ProductList'

const data = [
    { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
    { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
    { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
]

export default class ExerciseCart extends Component {
    state = {
        detail: [],
    }

    addProduct = (prod) => {
        let productCart = { "maSP": prod.maSP, "tenSP": prod.tenSP, "giaBan": prod.giaBan, "hinhAnh": prod.hinhAnh, "soLuong": 1 }
        let updateCart = [...this.state.detail];
        let index = updateCart.findIndex((prod) => {
            return prod.maSP == productCart.maSP;
        });
        if (index !== -1) {
            updateCart[index].soLuong += 1;
        } else {
            updateCart.push(productCart);
        }

        this.setState({
            detail: updateCart
        })
    }

    increaseAmount = (productCart) => {
        console.log(productCart)
        let updateCart = [...this.state.detail];
        let index = updateCart.findIndex((prod) => {
            return prod.maSP == productCart.maSP;
        });
        if (index !== -1) {
            updateCart[index].soLuong += 1;
        }

        this.setState({
            detail: updateCart
        })
    }

    reduceAmount = (productCart) => {
        let updateCart = [...this.state.detail];
        let index = updateCart.findIndex((prod) => {
            return prod.maSP == productCart.maSP
        })

        if (index !== -1) {
            updateCart[index].soLuong -= 1;
        }

        this.setState({
            detail: updateCart
        })

    }

    deleteProduct = (product) => {
        let arrCart = [...this.state.detail]
        let newCart = arrCart.filter((prod) => {
            return prod.maSP != product.maSP
        })

        this.setState({
            detail: newCart
        })
    }

    totalProduct = (arr) => {
        let totalAmount = arr.reduce((total, prod) => {
            return total + prod.soLuong
        }, 0)
        return totalAmount;
    }



    render() {
        return (
            <div className='exerciseCart container'>
                <h2 className='text-center text-success'>Bài Tập Giỏ Hàng</h2>
                <button type="button" className="btn btn-primary btn-lg ms-3" data-bs-toggle="modal" data-bs-target="#modalId">
                    Xem Giỏ Hàng
                </button>
                <span className='ms-3 text-success'>Giỏ Hàng ({this.totalProduct(this.state.detail)})</span>
                <Cart detail={this.state.detail} increaseAmount={this.increaseAmount} reduceAmount={this.reduceAmount} deleteProduct={this.deleteProduct} />
                <ProductList productData={data} addProduct={this.addProduct} />
            </div>
        )
    }
}
