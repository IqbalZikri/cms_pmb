<?php

namespace Database\Seeders;

use App\Models\SiteSettings;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SiteSettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $settings = [
            ['setting_key' => 'nama_website', "setting_value" => "Penerimaan Mahasiswa Baru - Universitas Cendekia Abditama"],
            ["setting_key" => "logo_url", "setting_value" => "/icon/favicon.ico"],
            ['setting_key' => 'facebook_url', 'setting_value' => null],
            ['setting_key' => 'instagram_url', 'setting_value' => 'https://www.instagram.com/uca.info/'],
            ['setting_key' => 'twitter_url', 'setting_value' => null],
            ['setting_key' => 'tiktok_url', 'setting_value' => null],
            ['setting_key' => 'telepon', 'setting_value' => '+62 858-1027-9040'],
            ['setting_key' => 'email', 'setting_value' => 'info@uca.ac.id'],
            ['setting_key' => 'alamat', 'setting_value' => 'Komplek Islamic Village, Jl. Islamic Raya No. 1, Kelurahan/Kecamatan Kelapa Dua, Kabupaten Tangerang, Banten 1581'],
            ['setting_key' => 'whatsapp_number', 'setting_value' => '6285810279040'],
        ];

        foreach ($settings as $setting) {
            SiteSettings::updateOrCreate(
                ['setting_key' => $setting['setting_key']],
                $setting
            );
        }
    }
}
