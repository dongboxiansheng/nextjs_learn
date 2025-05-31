// 之所以会有“爆红”（红色报错），是因为当前文件没有引入 React，导致 TypeScript 无法识别 JSX 语法和 React 相关类型。
// 解决方法是在文件顶部加上 `import React from 'react';`，这样类型和 JSX 就能被正确识别了。

import React from 'react';
import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
