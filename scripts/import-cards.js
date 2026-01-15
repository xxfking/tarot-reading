const fs = require('fs');
const path = require('path');

// 图片源目录
const sourceDir = 'C:\\Users\\13580\\Desktop\\card\\1920-raider-waite-tarot\\data\\1920-raider-waite-tarot-public-domain\\train';
// 目标目录
const targetDir = path.join(__dirname, '..', 'public', 'cards');

// 确保目标目录存在
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// 文件编号到塔罗牌的映射（根据 metadata.csv 分析）
const cardMapping = {
  '00': 'major-00-fool',
  '02': 'major-01-magician',
  '03': 'major-02-high-priestess',
  '04': 'major-03-empress',
  '05': 'major-04-emperor',
  '06': 'major-05-hierophant',
  '07': 'major-06-lovers',
  '08': 'major-07-chariot',
  '09': 'major-08-strength',
  '10': 'major-09-hermit',
  '11': 'major-10-wheel',
  '12': 'major-11-justice',
  '13': 'major-12-hanged-man',
  '14': 'major-13-death',
  '15': 'major-14-temperance',
  '16': 'major-15-devil',
  '17': 'major-16-tower',
  '18': 'major-17-star',
  '19': 'major-18-moon',
  '20': 'major-19-sun',
  '21': 'major-20-judgement',
  '22': 'major-21-world',

  // Wands (权杖)
  '23': 'wands-01-ace',
  '24': 'wands-02',
  '25': 'wands-03',
  '26': 'wands-04',
  '27': 'wands-05',
  '28': 'wands-06',
  '29': 'wands-07',
  '30': 'wands-08',
  '31': 'wands-09',
  '32': 'wands-10',
  '33': 'wands-page',
  '34': 'wands-knight',
  '35': 'wands-queen',
  '36': 'wands-king',

  // Cups (圣杯)
  '37': 'cups-01-ace',
  '38': 'cups-02',
  '39': 'cups-03',
  '40': 'cups-04',
  '41': 'cups-05',
  '42': 'cups-06',
  '43': 'cups-07',
  '44': 'cups-08',
  '45': 'cups-09',
  '46': 'cups-10',
  '47': 'cups-page',
  '48': 'cups-knight',
  '49': 'cups-queen',
  '50': 'cups-king',

  // Swords (宝剑)
  '51': 'swords-01-ace',
  '52': 'swords-02',
  '53': 'swords-03',
  '54': 'swords-04',
  '55': 'swords-05',
  '56': 'swords-06',
  '57': 'swords-07',
  '58': 'swords-08',
  '59': 'swords-09',
  '60': 'swords-10',
  '61': 'swords-page',
  '62': 'swords-knight',
  '63': 'swords-queen',
  '64': 'swords-king',

  // Pentacles (星币)
  '65': 'pentacles-01-ace',
  '66': 'pentacles-02',
  '67': 'pentacles-03',
  '68': 'pentacles-04',
  '69': 'pentacles-05',
  '70': 'pentacles-06',
  '71': 'pentacles-07',
  '72': 'pentacles-08',
  '73': 'pentacles-09',
  '74': 'pentacles-10',
  '75': 'pentacles-page',
  '76': 'pentacles-knight',
  '77': 'pentacles-queen',
  '78': 'pentacles-king',
};

// 读取源目录中的所有文件
const files = fs.readdirSync(sourceDir);

let copiedCount = 0;

files.forEach(file => {
  // 匹配文件名格式：0603205238985_XX_hash.jpg
  const match = file.match(/0603205238985_(\d+)_.*\.jpg$/);

  if (match) {
    const fileNumber = match[1];
    const targetName = cardMapping[fileNumber];

    if (targetName) {
      const sourcePath = path.join(sourceDir, file);
      const targetPath = path.join(targetDir, `${targetName}.jpg`);

      try {
        fs.copyFileSync(sourcePath, targetPath);
        console.log(`✓ Copied: ${file} → ${targetName}.jpg`);
        copiedCount++;
      } catch (error) {
        console.error(`✗ Error copying ${file}:`, error.message);
      }
    } else {
      console.warn(`⚠ No mapping found for file number: ${fileNumber}`);
    }
  }
});

console.log(`\n✓ Successfully copied ${copiedCount} card images!`);
console.log(`Target directory: ${targetDir}`);
