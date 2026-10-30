// 🔓 Coloca o KIT COMPLETO de autorizações no APK (o GitHub roda isto antes de montar).
// Ficam de fora só SMS, ligações e contatos: com elas o Play Protect bloqueia o APK.
const fs = require('fs');
const M = process.argv[2] || 'android/app/src/main/AndroidManifest.xml';
let x = fs.readFileSync(M, 'utf8');
const KIT = [
  'INTERNET', 'ACCESS_NETWORK_STATE', 'ACCESS_WIFI_STATE', 'RECORD_AUDIO', 'MODIFY_AUDIO_SETTINGS', 'CAMERA',
  'READ_MEDIA_IMAGES', 'READ_MEDIA_VIDEO', 'READ_MEDIA_AUDIO', 'READ_MEDIA_VISUAL_USER_SELECTED',
  'READ_EXTERNAL_STORAGE" android:maxSdkVersion="32', 'WRITE_EXTERNAL_STORAGE" android:maxSdkVersion="29',
  'ACCESS_COARSE_LOCATION', 'ACCESS_FINE_LOCATION', 'POST_NOTIFICATIONS', 'VIBRATE', 'WAKE_LOCK',
  'FOREGROUND_SERVICE', 'RECEIVE_BOOT_COMPLETED', 'USE_BIOMETRIC', 'USE_FINGERPRINT', 'BLUETOOTH_CONNECT', 'NFC',
];
const RECURSOS = ['camera', 'camera.autofocus', 'microphone', 'location', 'location.gps', 'bluetooth', 'nfc', 'fingerprint'];
const novas = [];
for (const k of KIT) {
  const nome = k.split('"')[0];
  if (new RegExp('android\\.permission\\.' + nome + '"').test(x)) continue;
  novas.push('    <uses-permission android:name="android.permission.' + k + '" />');
}
for (const r of RECURSOS) {
  if (x.includes('android.hardware.' + r + '"')) continue;
  novas.push('    <uses-feature android:name="android.hardware.' + r + '" android:required="false" />');
}
if (novas.length) x = x.replace(/(<manifest[^>]*>)/, '$1\n' + novas.join('\n'));
fs.writeFileSync(M, x);
console.log('Autorizações no APK: ' + (x.match(/uses-permission/g) || []).length + ' (novas: ' + novas.length + ')');
