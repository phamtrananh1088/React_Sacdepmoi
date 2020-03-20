import React, { Component } from 'react';
import { ComCarousel } from './ComCarousel';
export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = { products: [], loading: true };
    }

    componentDidMount() {
        this.populateProductData();
    }

    render() {
        let carosel_contents = '';
        if (this.state.loading) {
            carosel_contents = <p><em>Loading...</em></p>;
        } else {
            let data = [];
            this.state.products.map(p => {
                data.push(p.image + '=w410-h410-p-k-nu-iv1');
            });
            const tick = 5000;
            carosel_contents = <ComCarousel data={data} tick={tick} />;
        }
        let dataAudio = ['000_mo_dau.mp3',
        '001_nhung_quy_dinh_chung_dieu_1.mp3',
        '002_nhung_quy_dinh_chung_dieu_2.mp3',
        '003_nhung_quy_dinh_chung_dieu_3.mp3',
        '004_nhung_quy_dinh_chung_dieu_4.mp3',
        '005_nhung_quy_dinh_chung_dieu_5.mp3',
        '006_dang_ky_hoat_dong_BHDC_dieu_6.mp3',
        '007_dang_ky_hoat_dong_BHDC_dieu_7.mp3',
        '008_dang_ky_hoat_dong_BHDC_dieu_8.mp3',
        '009_dang_ky_hoat_dong_BHDC_dieu_9.mp3',
        '010_dang_ky_hoat_dong_BHDC_dieu_10.mp3',
        '011_dang_ky_hoat_dong_BHDC_dieu_11.mp3',
        '012_dang_ky_hoat_dong_BHDC_dieu_12.mp3',
        '013_dang_ky_hoat_dong_BHDC_dieu_13.mp3',
        '014_dang_ky_hoat_dong_BHDC_dieu_14.mp3',
        '015_dang_ky_hoat_dong_BHDC_dieu_15.mp3',
        '016_dang_ky_hoat_dong_BHDC_dieu_16.mp3',
        '017_dang_ky_hoat_dong_BHDC_dieu_17.mp3',
        '018_dang_ky_hoat_dong_BHDC_dieu_18.mp3',
        '019_quan_ly_hoat_dong_BHDC_tai_dia_phuong_dieu_19.mp3',
        '020_quan_ly_hoat_dong_BHDC_tai_dia_phuong_dieu_20.mp3',
        '021_quan_ly_hoat_dong_BHDC_tai_dia_phuong_dieu_21.mp3',
        '022_quan_ly_hoat_dong_BHDC_tai_dia_phuong_dieu_22.mp3',
        '023_quan_ly_hoat_dong_BHDC_tai_dia_phuong_dieu_23.mp3',
        '024_quan_ly_hoat_dong_BHDC_tai_dia_phuong_dieu_24.mp3',
        '025_quan_ly_hoat_dong_BHDC_tai_dia_phuong_dieu_25.mp3',
        '026_quan_ly_hoat_dong_BHDC_tai_dia_phuong_dieu_26.mp3',
        '027_quan_ly_hoat_dong_BHDC_tai_dia_phuong_dieu_27.mp3',
        '028_quan_ly_nguoi_tham_gia_BHDC_dieu_28.mp3',
        '029_quan_ly_nguoi_tham_gia_BHDC_dieu_29.mp3',
        '030_quan_ly_nguoi_tham_gia_BHDC_dieu_30.mp3',
        '031_quan_ly_nguoi_tham_gia_BHDC_dieu_31.mp3',
        '032_quan_ly_nguoi_tham_gia_BHDC_dieu_32.mp3',
        '033_quan_ly_nguoi_tham_gia_BHDC_dieu_33.mp3',
        '034_quan_ly_nguoi_tham_gia_BHDC_dieu_34.mp3',
        '035_quan_ly_nguoi_tham_gia_BHDC_dieu_35.mp3',
        '036_quan_ly_nguoi_tham_gia_BHDC_dieu_36.mp3',
        '037_quan_ly_nguoi_tham_gia_BHDC_dieu_37.mp3',
        '038_quan_ly_nguoi_tham_gia_BHDC_dieu_38.mp3',
        '039_quan_ly_nguoi_tham_gia_BHDC_dieu_39.mp3',
        '040_hoat_dong_BHDC_dieu_40.mp3',
        '041_hoat_dong_BHDC_dieu_41.mp3',
        '042_hoat_dong_BHDC_dieu_42.mp3',
        '043_hoat_dong_BHDC_dieu_43.mp3',
        '044_hoat_dong_BHDC_dieu_44.mp3',
        '045_hoat_dong_BHDC_dieu_45.mp3',
        '046_hoat_dong_BHDC_dieu_46.mp3',
        '047_hoat_dong_BHDC_dieu_47.mp3',
        '048_hoat_dong_BHDC_dieu_48.mp3',
        '049_hoat_dong_BHDC_dieu_49.mp3',
        '050_ky_quy_dieu_50.mp3',
        '051_ky_quy_dieu_51.mp3',
        '052_ky_quy_dieu_52.mp3',
        '053_ky_quy_dieu_53.mp3',
        '054_trach_nhiem_quan_ly_nha_nuoc_dieu_54.mp3',
        '055_trach_nhiem_quan_ly_nha_nuoc_dieu_55.mp3',
        '056_trach_nhiem_quan_ly_nha_nuoc_dieu_56.mp3',
        '057_trach_nhiem_quan_ly_nha_nuoc_dieu_57.mp3',
        '058_trach_nhiem_quan_ly_nha_nuoc_dieu_58.mp3',
        '059_dieu_khoan_thi_hanh_dieu_59.mp3',
        '060_dieu_khoan_thi_hanh_dieu_60.mp3',
        '061_dieu_khoan_thi_hanh_dieu_61.mp3',
        '062_phu_luc.mp3'];
        let fix1 = "Your browser does not support the";
        let fix2 = "audio";
        let fix3 = " element.";
        let audio = dataAudio.map(item=>
                <figure>
                    <figcaption>{item}</figcaption>
                    <audio
                        controls
                        src={"../contents/nghidinh402018/"+item}>
                            {fix1}
                            <code>{fix2}</code>{fix3}
                    </audio>
                </figure>
        );
   
        return (
          <div>
            {carosel_contents}   
            <div>
                {audio}
            </div>
          </div>
        );
    }

    async populateProductData() {
        const response = await fetch('api/product_api.php/get_all_products');
        const data = await response.json();
        this.setState({ products: data, loading: false });
    }
}
