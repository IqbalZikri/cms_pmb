export interface SiteSetting {
    nama_website: string | null;
    deskripsi_website: string | null;
    logo_url: string | null;
    facebook_url: string | null;
    instagram_url: string | null;
    twitter_url: string | null;
    telepon: string | null;
    email: string | null;
    alamat: string | null;
    whatsapp_number: string | null;
}

export interface SharedData {
    site_setting: SiteSetting;
    // ...props shared lainnya (auth, dll)
    [key: string]: unknown;
}