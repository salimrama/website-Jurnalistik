document.addEventListener('DOMContentLoaded', () => {
    const bodyContent = `
    <header class="topbar">
        <a class="brand" href="#" aria-label="Kampus Kita">
            <span class="brand-mark" aria-hidden="true">
                <svg width="21" height="21" viewBox="0 0 24 24" fill="none">
                    <path d="M12 3 3.5 7.5 12 12l8.5-4.5L12 3Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
                    <path d="M6.5 9.2v5.1c0 1.2 2.5 3.2 5.5 3.2s5.5-2 5.5-3.2V9.2M20.5 8v6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </span>
            Kampus Kita
        </a>
        <span class="top-note">Pendaftaran anggota UKM Jurnalistik</span>
    </header>

    <main>
        <section class="page-heading" aria-labelledby="page-title">
            <span class="eyebrow">UKM Jurnalistik</span>
            <h1>Temukan ruang untuk<br>bertumbuh bersama.</h1>
            <p>Isi data dirimu dan bergabunglah dengan UKM Jurnalistik untuk belajar menulis, meliput,berbagi cerita dan layout majalah.</p>
        </section>

        <div class="registration-layout">
            <section class="form-card" aria-labelledby="form-title">
                <div class="form-heading">
                    <div>
                        <h2 id="form-title">Formulir pendaftaran</h2>
                        <p>Lengkapi informasi berikut dengan benar.</p>
                    </div>
                    <span class="step-pill">DATA DIRI</span>
                </div>

                <form id="registration-form">
                    <div class="form-grid">
                        <div class="field full">
                            <label for="nama">Nama lengkap <span class="required">*</span></label>
                            <input id="nama" name="nama" type="text" placeholder="Contoh: Salim Ramadhan" autocomplete="name" required>
                        </div>

                        <div class="field">
                            <label for="nim">Nomor Induk Mahasiswa (NIM) <span class="required">*</span></label>
                            <input id="nim" name="nim" type="text" placeholder="Contoh: 2310123456" autocomplete="off" required>
                        </div>

                        <div class="field">
                            <label for="semester">Semester saat ini <span class="required">*</span></label>
                            <select id="semester" name="semester" required>
                                <option value="" disabled selected>Pilih semester</option>
                                <option value="1">Semester 1</option>
                                <option value="2">Semester 2</option>
                                <option value="3">Semester 3</option>
                                <option value="4">Semester 4</option>
                                <option value="5">Semester 5</option>
                            </select>
                        </div>

                        <div class="field full">
                            <label for="divisi">Divisi yang diminati <span class="required">*</span></label>
                            <select id="divisi" name="divisi" required>
                                <option value="" disabled selected>Pilih divisi</option>
                                <option value="layouting">Divisi Layouting</option>
                                <option value="editor">Divisi Editor</option>
                                <option value="reporter">Divisi Reporter</option>
                                <option value="sdm">Divisi SDM</option>
                            </select>
                        </div>

                        <div class="field">
                            <label for="tanggal-lahir">Tanggal lahir <span class="required">*</span></label>
                            <input id="tanggal-lahir" name="tanggalLahir" type="date" autocomplete="bday" required>
                        </div>

                        <div class="field">
                            <label for="usia">Usia <span class="required">*</span></label>
                            <input id="usia" name="usia" type="number" min="1" max="120" placeholder="Otomatis dari tanggal lahir" readonly required>
                            <p class="field-hint">Usia dihitung otomatis berdasarkan tanggal lahir.</p>
                        </div>

                        <div class="field full">
                            <label for="alamat">Alamat <span class="required">*</span></label>
                            <textarea id="alamat" name="alamat" placeholder="Masukkan alamat tempat tinggal saat ini" autocomplete="street-address" required></textarea>
                        </div>
                    </div>

                    <div id="success-message" class="success-message" role="status" aria-live="polite"></div>

                    <div class="form-footer">
                        <span class="privacy-note">
                            <svg width="15" height="15" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                                <path d="M10 2.5 3.5 5v4.8c0 4 2.7 6.6 6.5 7.7 3.8-1.1 6.5-3.7 6.5-7.7V5L10 2.5Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
                                <path d="m7.5 9.8 1.7 1.7 3.5-3.7" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            Data kamu aman dan hanya digunakan untuk pendaftaran.
                        </span>
                        <button class="submit-button" type="submit" id="btn-daftar">
                            Daftar sekarang
                            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                                <path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </form>
            </section>

            <aside class="aside-card" aria-label="Tentang UKM">
                <div class="aside-content">
                    <div class="illustration" aria-hidden="true">
                        <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
                            <path d="M16 26.5s-10-5.6-10-13A5.4 5.4 0 0 1 16 10a5.4 5.4 0 0 1 10 3.5c0 7.4-10 13-10 13Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>
                            <path d="M11.5 16h3l1.5-3 2.1 6 1.4-3h1.2" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <h3>Ceritakan kisah, suarakan perubahan.</h3>
                    <p class="intro">UKM Jurnalistik menjadi ruang untuk mengasah kemampuan menulis, wawancara, peliputan bersama dan layouting.</p>

                    <ul class="benefits">
                        <li><span class="check" aria-hidden="true">✓</span> Kenali minat dan potensi terbaikmu</li>
                        <li><span class="check" aria-hidden="true">✓</span> Bangun relasi dan pengalaman baru</li>
                        <li><span class="check" aria-hidden="true">✓</span> Ciptakan dampak positif di kampus</li>
                    </ul>
                </div>
                <div class="aside-bottom">Bertumbuh, berkarya, dan berdampak. ✦</div>
            </aside>
        </div>
    </main>
    `;

    document.body.insertAdjacentHTML('afterbegin', bodyContent);
});