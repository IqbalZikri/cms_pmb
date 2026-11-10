<?php

namespace App\Http\Controllers;

use App\Models\SiteSettings;
use Illuminate\Http\Request;
use Inertia\Inertia;

class KontakController extends Controller
{
    public function index()
    {
        $telepon = SiteSettings::where('setting_key', 'telepon')->value('setting_value');
        $email = SiteSettings::where('setting_key', 'email')->value('setting_value');
        $alamat = SiteSettings::where('setting_key', 'alamat')->value('setting_value');
        $instagram = SiteSettings::where('setting_key', 'instagram_url')->value('setting_value');
        $facebook = SiteSettings::where('setting_key', 'facebook_url')->value('setting_value');
        $tiktok = SiteSettings::where('setting_key', 'tiktok_url')->value('setting_value');
        $whatsapp = SiteSettings::where('setting_key', 'whatsapp_number')->value('setting_value');

        return Inertia::render('public/kontak', [
            'telepon' => $telepon,
            'email' => $email,
            'alamat' => $alamat,
            'instagram' => $instagram,
            'facebook' => $facebook,
            'tiktok' => $tiktok,
            'whatsapp' => $whatsapp,
        ]);
    }
}
