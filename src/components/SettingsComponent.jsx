import { AppBar } from '@mui/material';
import './styles/setting-style.css'
import ButtonAppBar from './Appbar';
export default function Settings() {
    return (
        <div>


            <ButtonAppBar></ButtonAppBar>

            <div className="mainContainer" style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                <div>
                    <h2>AYARLAR</h2>
                    <h5>
                        Tüm Bookinary ayarlarınızı tek bir yerden yönetin.

                    </h5>
                </div>

                <div className="settingsContainer">


                    <div class="settingsLeft">
                        <div class="accountSetup">

                            <h3>Hesap ayarları</h3>
                            <ul>
                                <li>
                                    <h4>Detaylar</h4>
                                    <div class="paragraphs">
                                        <p>İşletme adınızı, saat ve dil ayarlarınızı yönetin. Sosyal medya bağlantılarınızı ayarlayın.</p>
                                        <svg style={{ width: "20px" }} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6.187 16.9c-.25.253-.25.66 0 .91.248.253.652.253.9 0l7.285-7.355c.25-.25.25-.66 0-.91L7.088 2.19c-.25-.253-.652-.253-.9 0-.25.25-.25.658-.002.91L12.83 10l-6.643 6.9z">
                                            </path>
                                        </svg>

                                    </div>

                                </li>
                                <li>
                                    <h4>Konumlar</h4>
                                    <div class="paragraphs">
                                        <p>İşletmeniz için birden fazla satış noktası belirleyin.</p>
                                        <svg style={{ width: "20px" }} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6.187 16.9c-.25.253-.25.66 0 .91.248.253.652.253.9 0l7.285-7.355c.25-.25.25-.66 0-.91L7.088 2.19c-.25-.253-.652-.253-.9 0-.25.25-.25.658-.002.91L12.83 10l-6.643 6.9z">
                                            </path>
                                        </svg>

                                    </div>
                                </li>
                                <li>
                                    <h4>Online rezervasyon</h4>
                                    <div class="paragraphs">
                                        <p>Müşterilerin randevularını çevrimiçi olarak alma ve yönetme şeklini ayarlayın.</p>
                                        <svg style={{ width: "20px" }} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6.187 16.9c-.25.253-.25.66 0 .91.248.253.652.253.9 0l7.285-7.355c.25-.25.25-.66 0-.91L7.088 2.19c-.25-.253-.652-.253-.9 0-.25.25-.25.658-.002.91L12.83 10l-6.643 6.9z">
                                            </path>
                                        </svg>

                                    </div>
                                </li>
                                <li>
                                    <h4>Kaynaklar</h4>
                                    <div class="paragraphs">
                                        <p>Hizmetleriniz için kaynaklarınızı yönetin.</p>
                                        <svg style={{ width: "20px" }} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6.187 16.9c-.25.253-.25.66 0 .91.248.253.652.253.9 0l7.285-7.355c.25-.25.25-.66 0-.91L7.088 2.19c-.25-.253-.652-.253-.9 0-.25.25-.25.658-.002.91L12.83 10l-6.643 6.9z">
                                            </path>
                                        </svg>

                                    </div>
                                </li>
                                <li>
                                    <h4>İşletmenizin kapalı olduğu dönemler</h4>
                                    <div class="paragraphs">
                                        <p>İşletmenizin kapalı olduğu dönemi ayarlayın.</p>
                                        <svg style={{ width: "20px" }} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6.187 16.9c-.25.253-.25.66 0 .91.248.253.652.253.9 0l7.285-7.355c.25-.25.25-.66 0-.91L7.088 2.19c-.25-.253-.652-.253-.9 0-.25.25-.25.658-.002.91L12.83 10l-6.643 6.9z">
                                            </path>
                                        </svg>

                                    </div>
                                </li>

                            </ul>

                        </div>
                        <div class="services">
                            <h3>Hizmetler</h3>
                            <ul>
                                <li>
                                    <h4>Hizmetler menüsü</h4>
                                    <div class="paragraphs">
                                        <p>Rezervasyonlar için mevcut hizmet türlerini ekleyin, düzenleyin ve silin.</p>
                                        <svg style={{ width: "20px" }} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6.187 16.9c-.25.253-.25.66 0 .91.248.253.652.253.9 0l7.285-7.355c.25-.25.25-.66 0-.91L7.088 2.19c-.25-.253-.652-.253-.9 0-.25.25-.25.658-.002.91L12.83 10l-6.643 6.9z">
                                            </path>
                                        </svg>

                                    </div>
                                </li>
                                <li>
                                    <h4>Üyelikler</h4>
                                    <div class="paragraphs">
                                        <p>Satışa sunulan çoklu oturum üyeliklerini ekleyin, düzenleyin ve silin.</p>
                                        <svg style={{ width: "20px" }} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6.187 16.9c-.25.253-.25.66 0 .91.248.253.652.253.9 0l7.285-7.355c.25-.25.25-.66 0-.91L7.088 2.19c-.25-.253-.652-.253-.9 0-.25.25-.25.658-.002.91L12.83 10l-6.643 6.9z">
                                            </path>
                                        </svg>

                                    </div>
                                </li>


                            </ul>
                        </div>
                        <div class="team">
                            <h3>Müşteriler</h3>
                            <ul>
                                <li>
                                    <h4>Müşteri bildirimleri</h4>
                                    <div class="paragraphs">
                                        <p>Müşterilere rezervazyonları hakkında gönderilen mesajları inceleyin.</p>
                                        <svg style={{ width: "20px" }} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6.187 16.9c-.25.253-.25.66 0 .91.248.253.652.253.9 0l7.285-7.355c.25-.25.25-.66 0-.91L7.088 2.19c-.25-.253-.652-.253-.9 0-.25.25-.25.658-.002.91L12.83 10l-6.643 6.9z">
                                            </path>
                                        </svg>

                                    </div>
                                </li>
                                <li>
                                    <h4>Yönlendirme kaynakları</h4>
                                    <div class="paragraphs">
                                        <p>Müşterilerin işletmenizi nasıl bulduğunu takip etmek için özel kaynaklar oluşturun.</p>
                                        <svg style={{ width: "20px" }} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6.187 16.9c-.25.253-.25.66 0 .91.248.253.652.253.9 0l7.285-7.355c.25-.25.25-.66 0-.91L7.088 2.19c-.25-.253-.652-.253-.9 0-.25.25-.25.658-.002.91L12.83 10l-6.643 6.9z">
                                            </path>
                                        </svg>

                                    </div>
                                </li>
                                <li>
                                    <h4>İptal nedenleri</h4>
                                    <div class="paragraphs">
                                        <p>Müşterilerin randevularına neden gelmediklerini takip edin.</p>
                                        <svg style={{ width: "20px" }} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6.187 16.9c-.25.253-.25.66 0 .91.248.253.652.253.9 0l7.285-7.355c.25-.25.25-.66 0-.91L7.088 2.19c-.25-.253-.652-.253-.9 0-.25.25-.25.658-.002.91L12.83 10l-6.643 6.9z">
                                            </path>
                                        </svg>

                                    </div>
                                </li>


                            </ul>
                        </div>
                    </div>
                    <div class="settingsRight">
                        <div class="clients">
                            <h3>Satış</h3>
                            <ul>
                                <li>
                                    <h4>Makbuz sıralaması</h4>
                                    <div class="paragraphs">
                                        <p>Müşterilerinize verilen satış makbuzlarında görüntülenen ayrıntıları yapılandırın.</p>
                                        <svg style={{ width: "20px" }} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6.187 16.9c-.25.253-.25.66 0 .91.248.253.652.253.9 0l7.285-7.355c.25-.25.25-.66 0-.91L7.088 2.19c-.25-.253-.652-.253-.9 0-.25.25-.25.658-.002.91L12.83 10l-6.643 6.9z">
                                            </path>
                                        </svg>

                                    </div>
                                </li>
                                <li>
                                    <h4>Makbuz şablonu</h4>
                                    <div class="paragraphs">
                                        <p>Müşterilerinize verilen satış makbuzlarında görüntülenen ayrıntıları yapılandırın.</p>
                                        <svg style={{ width: "20px" }} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6.187 16.9c-.25.253-.25.66 0 .91.248.253.652.253.9 0l7.285-7.355c.25-.25.25-.66 0-.91L7.088 2.19c-.25-.253-.652-.253-.9 0-.25.25-.25.658-.002.91L12.83 10l-6.643 6.9z">
                                            </path>
                                        </svg>

                                    </div>
                                </li>
                                <li>
                                    <h4>Vergiler</h4>
                                    <div class="paragraphs">
                                        <p>Ödeme  sırasında satılan ürünlere uygulanan vergi oranlarını yönetin.</p>
                                        <svg style={{ width: "20px" }} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6.187 16.9c-.25.253-.25.66 0 .91.248.253.652.253.9 0l7.285-7.355c.25-.25.25-.66 0-.91L7.088 2.19c-.25-.253-.652-.253-.9 0-.25.25-.25.658-.002.91L12.83 10l-6.643 6.9z">
                                            </path>
                                        </svg>

                                    </div>
                                </li>
                                <li>
                                    <h4>Servis ücretleri</h4>
                                    <div class="paragraphs">
                                        <p>Ödeme sırasında satılan hizmetler ve ürünler için geçerli olan ekstra ücretleri yönetin.</p>
                                        <svg style={{ width: "20px" }} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6.187 16.9c-.25.253-.25.66 0 .91.248.253.652.253.9 0l7.285-7.355c.25-.25.25-.66 0-.91L7.088 2.19c-.25-.253-.652-.253-.9 0-.25.25-.25.658-.002.91L12.83 10l-6.643 6.9z">
                                            </path>
                                        </svg>

                                    </div>
                                </li>
                                <li>
                                    <h4>İpuçları</h4>
                                    <div class="paragraphs">
                                        <p>İşletmeniz için bahşiş ayarlarını yönetin.</p>
                                        <svg style={{ width: "20px" }} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6.187 16.9c-.25.253-.25.66 0 .91.248.253.652.253.9 0l7.285-7.355c.25-.25.25-.66 0-.91L7.088 2.19c-.25-.253-.652-.253-.9 0-.25.25-.25.658-.002.91L12.83 10l-6.643 6.9z">
                                            </path>
                                        </svg>

                                    </div>
                                </li>
                                <li>
                                    <h4>Ödeme tipleri</h4>
                                    <div class="paragraphs">
                                        <p>Ödeme sırasında kullanılacak manuel ödeme türlerini ayarlayın.</p>
                                        <svg style={{ width: "20px" }} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6.187 16.9c-.25.253-.25.66 0 .91.248.253.652.253.9 0l7.285-7.355c.25-.25.25-.66 0-.91L7.088 2.19c-.25-.253-.652-.253-.9 0-.25.25-.25.658-.002.91L12.83 10l-6.643 6.9z">
                                            </path>
                                        </svg>

                                    </div>
                                </li>
                                <li>
                                    <h4>Hediye kartları</h4>
                                    <div class="paragraphs">
                                        <p>Hediye kartlarınızı ayarlayın.</p>
                                        <svg style={{ width: "20px" }} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6.187 16.9c-.25.253-.25.66 0 .91.248.253.652.253.9 0l7.285-7.355c.25-.25.25-.66 0-.91L7.088 2.19c-.25-.253-.652-.253-.9 0-.25.25-.25.658-.002.91L12.83 10l-6.643 6.9z">
                                            </path>
                                        </svg>

                                    </div>
                                </li>
                                <li>
                                    <h4>Ek satış</h4>
                                    <div class="paragraphs">
                                        <p>Müşterileri çevrimiçi rezervasyon yaparken ek hizmetler için rezervasyon yapmaya ve uygun üyelikler satın almaya teşvik edin. </p>
                                        <svg style={{ width: "20px" }} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6.187 16.9c-.25.253-.25.66 0 .91.248.253.652.253.9 0l7.285-7.355c.25-.25.25-.66 0-.91L7.088 2.19c-.25-.253-.652-.253-.9 0-.25.25-.25.658-.002.91L12.83 10l-6.643 6.9z">
                                            </path>
                                        </svg>

                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="sales">
                            <h3>Personeller</h3>
                            <ul>
                                <li>
                                    <h4>İşletme personelleri</h4>
                                    <div class="paragraphs">
                                        <p>Ekip üyelerinizi ekleyin, düzenleyin ve silin.</p>
                                        <svg style={{ width: "20px" }} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6.187 16.9c-.25.253-.25.66 0 .91.248.253.652.253.9 0l7.285-7.355c.25-.25.25-.66 0-.91L7.088 2.19c-.25-.253-.652-.253-.9 0-.25.25-.25.658-.002.91L12.83 10l-6.643 6.9z">
                                            </path>
                                        </svg>

                                    </div>
                                </li>
                                <li>
                                    <h4>Çalışma saatleri</h4>
                                    <div class="paragraphs">
                                        <p>Ekip üyelerinizin çalışma saatlerini yönetin.</p>
                                        <svg style={{ width: "20px" }} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6.187 16.9c-.25.253-.25.66 0 .91.248.253.652.253.9 0l7.285-7.355c.25-.25.25-.66 0-.91L7.088 2.19c-.25-.253-.652-.253-.9 0-.25.25-.25.658-.002.91L12.83 10l-6.643 6.9z">
                                            </path>
                                        </svg>

                                    </div>
                                </li>
                                <li>
                                    <h4>İzinler</h4>
                                    <div class="paragraphs">
                                        <p>Personellerinizin her biri için Bookinary'ye erişim düzeyini yapılandırın.</p>
                                        <svg style={{ width: "20px" }} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6.187 16.9c-.25.253-.25.66 0 .91.248.253.652.253.9 0l7.285-7.355c.25-.25.25-.66 0-.91L7.088 2.19c-.25-.253-.652-.253-.9 0-.25.25-.25.658-.002.91L12.83 10l-6.643 6.9z">
                                            </path>
                                        </svg>

                                    </div>
                                </li>
                                <li>
                                    <h4>Komisyonlar</h4>
                                    <div class="paragraphs">
                                        <p>Personeller için komisyon hesaplamasını ayarlayın.</p>
                                        <svg style={{ width: "20px" }} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6.187 16.9c-.25.253-.25.66 0 .91.248.253.652.253.9 0l7.285-7.355c.25-.25.25-.66 0-.91L7.088 2.19c-.25-.253-.652-.253-.9 0-.25.25-.25.658-.002.91L12.83 10l-6.643 6.9z">
                                            </path>
                                        </svg>

                                    </div>

                                </li>
                                <li>
                                    <h4>İzin türleri</h4>
                                    <div class="paragraphs">
                                        <p>Ekip üyelerinin ne zaman izin ekleyeceğine ilişkin özel durumları ayarlayın.</p>
                                        <svg style={{ width: "20px" }} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6.187 16.9c-.25.253-.25.66 0 .91.248.253.652.253.9 0l7.285-7.355c.25-.25.25-.66 0-.91L7.088 2.19c-.25-.253-.652-.253-.9 0-.25.25-.25.658-.002.91L12.83 10l-6.643 6.9z">
                                            </path>
                                        </svg>

                                    </div>
                                </li>


                            </ul>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}