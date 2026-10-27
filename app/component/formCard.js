export const formCard = `
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
`;