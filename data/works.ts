/**
 * プロジェクトカテゴリの型定義
 */
export type WorkCategory =
  | "web-design"
  | "branding"
  | "ui-ux"
  | "graphic"
  | "motion"
  | "natural-food-branding"
  | "green-app-ui"
  | "able-corp-website"
  | "urban-style-branding"
  | "tech-innovation-website"
  | "health-app-ux";

/**
 * プロジェクト詳細の型定義
 */
export interface ProjectDetail {
  overview: string;
  challenge: string;
  solution: string;
  results: string;
  clientFeedback?: string;
  technologies: string[];
  projectImages: {
    url: string;
    caption: string;
  }[];
}

/**
 * 作品情報の型定義
 */
export interface WorkInfo {
  slug: string;
  title: string;
  categories: WorkCategory[];
  categoriesjp: string[];
  image: string;
  description: string;
  year: string;
  client: string;
  details: ProjectDetail;
}

/**
 * カテゴリとタイトルのマッピング
 */
export const categoryTitles: Partial<Record<WorkCategory, string>> = {
  "web-design": "Webデザイン",
  branding: "ブランディング",
  "ui-ux": "UI/UXデザイン",
  graphic: "グラフィックデザイン",
  motion: "モーションデザイン",
};

/**
 * 有効なカテゴリリスト
 */
export const validCategories: WorkCategory[] = [
  "web-design",
  "branding",
  "ui-ux",
  "graphic",
  "motion",
];

/**
 * 有効なカテゴリかチェックする関数
 * @param category チェック対象のカテゴリ
 * @returns 有効なカテゴリであればtrue
 */
export function isValidWorkCategory(
  category: string
): category is WorkCategory {
  return validCategories.includes(category as WorkCategory);
}

/**
 * 作品データ
 */
export const works: Record<string, WorkInfo> = {
  "natural-food-branding": {
    title: "ナチュラルフードブランディング",
    slug: "natural-food-branding",
    description: "オーガニック食品ブランドのブランディングとパッケージデザイン",
    image:
      "https://images.unsplash.com/photo-1555530001-acee1750bdcc?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categories: ["branding", "graphic"],
    categoriesjp: ["ブランディング", "グラフィックデザイン"],
    year: "2022",
    client: "Natural Foods, Inc.",
    details: {
      overview:
        "新しいオーガニック食品ブランドの立ち上げに伴い、ブランドアイデンティティとパッケージデザインを一貫して開発しました。健康と環境に配慮したブランド価値を視覚的に表現し、競合他社との差別化を図りました。",
      challenge:
        "競合が多いオーガニック食品市場で、独自性を持ちながらも消費者に親しみやすいブランドイメージを構築する必要がありました。また、環境への配慮を重視する企業理念を、パッケージデザインにも反映させることが課題でした。",
      solution:
        "自然由来の色調と手描き風のイラストを組み合わせた、温かみのあるビジュアルアイデンティティを創出しました。パッケージには再生可能素材を使用し、ミニマルでありながらも製品の鮮度と品質を伝えるデザインを採用しました。",
      results:
        "ブランド認知度が目標を30%上回り、SNSでの言及数も競合他社を上回る結果となりました。環境に配慮したパッケージデザインは、業界誌でも取り上げられ、ブランドの差別化に大きく貢献しました。",
      clientFeedback:
        "私たちのブランド理念を完璧に理解し、それを視覚的に表現してくれました。市場投入後の顧客反応も非常に良く、ブランドへの信頼構築に大きく貢献しています。",
      technologies: [
        "Adobe Illustrator",
        "Adobe Photoshop",
        "Adobe InDesign",
        "Sustainable Packaging Design",
      ],
      projectImages: [
        {
          url: "https://images.unsplash.com/photo-1555530001-acee1750bdcc?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          caption: "ブランドロゴデザイン",
        },
        {
          url: "https://images.unsplash.com/photo-1555530001-acee1750bdcc?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          caption: "パッケージデザイン",
        },
        {
          url: "https://images.unsplash.com/photo-1555530001-acee1750bdcc?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          caption: "ブランドガイドライン",
        },
      ],
    },
  },