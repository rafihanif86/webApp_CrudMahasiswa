import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id: 1, nim : '1731710139', name : 'Hesti Ambarwati', jenis_kelamin : 'P', alamat : 'Jombang', nama_bpk : 'Suparji', nama_ibu : 'Kanti Nurdayati', jurusan : 'Teknologi Informasi', prodi : 'D3 Manajemen Informatika', ipk_terakhir :3.60},
      {id: 2, nim : '1731710140', name : 'Ilmiyatus Sadiah', jenis_kelamin : 'P',  alamat : 'Malang',nama_bpk : 'Gading', nama_ibu : 'Gisel', jurusan : 'Teknologi Informasi', prodi : 'D3 Manajemen Informatika', ipk_terakhir  :3.61},
      {id: 3, nim : '1731710141', name : 'Mila Faulia', jenis_kelamin : 'P',  alamat : 'Tuban', nama_bpk : 'Adi', nama_ibu : 'Ani', jurusan : 'Teknologi Informasi', prodi : 'D3 Manajemen Informatika', ipk_terakhir  :3.62},
      {id: 4, nim : '1731710142', name : 'Ivfa Tut Tazkiah', jenis_kelamin : 'P',  alamat : 'Tulungagung', nama_bpk : 'Agus', nama_ibu : 'Dita', jurusan : 'Teknologi Informasi', prodi : 'D3 Manajemen Informatika', ipk_terakhir  :3.63},
      {id: 5, nim : '1731710143', name : 'Tyka Amelia Sari', jenis_kelamin : 'P', alamat : 'Tuban', nama_bpk : 'Roni', nama_ibu : 'Bella', jurusan : 'Teknologi Informasi', prodi : 'D3 Manajemen Informatika', ipk_terakhir  :3.64},
      {id: 6, nim : '1731710144', name : 'Alfira Nuridana', jenis_kelamin : 'P',  alamat : 'Madiun', nama_bpk : 'Ahmad', nama_ibu : 'Sri Cahya', jurusan : 'Teknologi Informasi', prodi : 'D3 Manajemen Informatika', ipk_terakhir  :3.65},
      {id: 7, nim : '1731710145', name : 'Berliana Faradiba', jenis_kelamin : 'P',  alamat : 'Kediri', nama_bpk : 'Rudi Pradana', nama_ibu : 'Siska', jurusan : 'Teknologi Informasi', prodi : 'D3 Manajemen Informatika', ipk_terakhir  :3.66},
      {id: 8, nim : '1731710146', name : 'Samira Mahfud', jenis_kelamin : 'P',  alamat : 'Blitar', nama_bpk : 'Khoirudin Fadli', nama_ibu : 'Diana Sari', jurusan : 'Teknologi Informasi', prodi : 'D3 Manajemen Informatika', ipk_terakhir  :3.67},
      {id: 9, nim : '1731710147', name : 'Elfira Amalia', jenis_kelamin : 'P',  alamat : 'Pandaan', nama_bpk : 'Nur Hadi', nama_ibu : 'Fatin Sidqia', jurusan : 'Teknologi Informasi', prodi : 'D3 Manajemen Informatika', ipk_terakhir  :3.68},
      {id: 10, nim : '1731710148', name : 'Dyah Putri', jenis_kelamin : 'P',  alamat : 'Malang', nama_bpk : 'Teguh Budi', nama_ibu : 'Yeni Ade Putri', jurusan : 'Teknologi Informasi', prodi : 'D3 Manajemen Informatika', ipk_terakhir  :3.69},
      {id: 11, nim : '1731710149', name : 'Muhammad Amin Syukron', jenis_kelamin : 'L',  alamat : 'Madura', nama_bpk : 'Eko', nama_ibu : 'Eka Dwi', jurusan : 'Teknologi Informasi', prodi : 'D3 Manajemen Informatika', ipk_terakhir  :3.61},
      {id: 12, nim : '1731710150', name : 'Rafi Hanif', jenis_kelamin : 'L',  alamat : 'Gresik', nama_bpk : 'Ahmad Afif', nama_ibu : 'Jesika Milla', jurusan : 'Teknologi Informasi', prodi : 'D3 Manajemen Informatika', ipk_terakhir  :3.62},
      {id: 13, nim : '1731710151', name : 'Sahabul Aswari', jenis_kelamin : 'L',  alamat : 'Malang', nama_bpk : 'Wawan Aji',nama_ibu : 'Siska Dwi', jurusan : 'Teknologi Informasi', prodi : 'D3 Manajemen Informatika', ipk_terakhir  :3.63},
      {id: 14, nim : '1731710152', name: 'Bagus Kurnia', jenis_kelamin : 'L',  alamat : 'Lombok', nama_bpk : 'Aji Candra', nama_ibu : 'Ayu Ashari', jurusan : 'Teknologi Informasi', prodi : 'D3 Manajemen Informatika', ipk_terakhir  :3.64},
      {id: 15, nim : '1731710153', name: 'Ridho Choirul Anam', jenis_kelamin : 'L',  alamat : 'Malang', nama_bpk : 'Putra Chandra', nama_ibu : 'Titin Ika', jurusan : 'Teknologi Informasi', prodi : 'D3 Manajemen Informatika', ipk_terakhir  :3.65},
      {id: 16, nim : '1731710154', name : 'Dion Maulana', jenis_kelamin : 'L',  alamat : 'Malang', nama_bpk : 'Ridho Adi', nama_ibu : 'Risma Dewaanti', jurusan : 'Teknologi Informasi', prodi : 'D3 Manajemen Informatika', ipk_terakhir  :3.66},
      {id: 17, nim : '1731710155', name: 'Dwiky Nur Ardiasyah', jenis_kelamin : 'L',  alamat : 'Kediri', nama_bpk : 'Ahmad Anjangsana', nama_ibu : 'Diana', jurusan : 'Teknologi Informasi', prodi : 'D3 Manajemen Informatika', ipk_terakhir  :3.67},
      {id: 18, nim : '1731710156', name : 'Irfan Purwo Saputro', jenis_kelamin : 'L',  alamat : 'Mojokerto', nama_bpk : 'Latif Wiobow', nama_ibu : 'Ninik Ika', jurusan : 'Teknologi Informasi', prodi : 'D3 Manajemen Informatika', ipk_terakhir  :3.68},
      {id: 19, nim : '1731710157', name : 'Lukman Hakim', jenis_kelamin : 'L',  alamat : 'Mojokerto', nama_bpk : 'Suparman', nama_ibu : 'Lilis Nurdia', jurusan : 'Teknologi Informasi', prodi : 'D3 Manajemen Informatika', ipk_terakhir  :3.69},
      {id: 20, nim : '1731710158', name : 'Fajar Maula Dandi', jenis_kelamin : 'L',  alamat : 'Blitar', nama_bpk : 'Sambang', nama_ibu : 'Lya Novita', jurusan : 'Teknologi Informasi', prodi : 'D3 Manajemen Informatika',ipk_terakhir  :3.60}

    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}