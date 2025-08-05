import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  FileText,
  Users,
  TrendingUp,
  Search,
  BarChart3,
  Package,
  Target,
  AlertTriangle,
  DollarSign,
  Mail,
  Facebook,
} from "lucide-react"

export default function SubmissionGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">好理家在文章徵稿</h1>
          <p className="text-lg text-gray-600">分享您的實務經驗，幫助更多家庭重建財務健康</p>
        </div>

        {/* 徵稿主題 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <FileText className="h-6 w-6 text-blue-600" />
              徵稿主題
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-6">
              我們誠摯邀請您分享使用好理家在財務健檢網站的實務經驗，特別歡迎以下三大主題：
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {/* 主題1 */}
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Users className="h-5 w-5 text-blue-600" />
                    好理家在使用經驗分享
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-gray-600">• 如何透過好理家在協助個案解決經濟困難</p>
                  <p className="text-sm text-gray-600">• 平台功能的實際運用心得</p>
                  <p className="text-sm text-gray-600">• 成功案例的具體操作過程</p>
                </CardContent>
              </Card>

              {/* 主題2 */}
              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Users className="h-5 w-5 text-green-600" />
                    陪伴個案脫困的實務經驗
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-gray-600">• 與個案建立信任關係的方法</p>
                  <p className="text-sm text-gray-600">• 共同面對經濟挑戰的策略與技巧</p>
                  <p className="text-sm text-gray-600">• 激勵個案持續努力的有效做法</p>
                </CardContent>
              </Card>

              {/* 主題3 */}
              <Card className="border-l-4 border-l-purple-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <TrendingUp className="h-5 w-5 text-purple-600" />
                    個人財務調整歷程分享
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-gray-600">• 從財務困頓到改善的完整歷程</p>
                  <p className="text-sm text-gray-600">• 關鍵轉折點與突破方法</p>
                  <p className="text-sm text-gray-600">• 長期維持財務健康的心得</p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* 建議文章架構 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <BarChart3 className="h-6 w-6 text-green-600" />
              建議文章架構
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-6">為了讓您的分享更有條理且具參考價值，建議可以依循以下架構撰寫：</p>

            <div className="space-y-6">
              {/* 第一部分 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Search className="h-4 w-4 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">第一部分：現況評估與資訊蒐集</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>• 描繪個案面臨的經濟困境狀態</li>
                    <li>• 收集相關背景資訊的方法與重點</li>
                    <li>• 初步評估的發現與觀察</li>
                  </ul>
                </div>
              </div>

              {/* 第二部分 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <BarChart3 className="h-4 w-4 text-orange-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">第二部分：問題分析與根源探討</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>• 釐清核心問題點</li>
                    <li>• 識別關鍵的致貧原因</li>
                    <li>• 分析問題的優先順序</li>
                  </ul>
                </div>
              </div>

              {/* 第三部分 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Package className="h-4 w-4 text-green-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">第三部分：資源盤點與開發</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>• 現有資源的全面盤點</li>
                    <li>• 可用資源的搜尋與評估</li>
                    <li>• 資源運用的策略規劃</li>
                  </ul>
                </div>
              </div>

              {/* 第四部分 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <Target className="h-4 w-4 text-purple-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">第四部分：處遇規劃與成果展現</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>• 與個案共同制定的處遇計畫</li>
                    <li>• 執行過程中的挑戰與調整</li>
                    <li>• 努力成果與後續追蹤</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 重要注意事項 */}
        <Card className="mb-8 border-orange-200 bg-orange-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-orange-800">
              <AlertTriangle className="h-6 w-6 text-orange-600" />
              重要注意事項
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-3 text-orange-800">隱私保護</h3>
                <div className="bg-white p-4 rounded-lg border border-orange-200">
                  <p className="font-medium text-gray-700 mb-2">
                    <strong>個案資訊去識別化</strong>：文章中涉及個案的所有資訊必須完全去識別化，包括姓名、地址等
                  </p>
                  <p className="text-gray-600">可使用化名或代號，確保個案隱私獲得充分保護</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3 text-orange-800">內容呈現</h3>
                <div className="bg-white p-4 rounded-lg border border-orange-200">
                  <ul className="text-gray-600 space-y-2">
                    <li>
                      <strong>圖文並茂</strong>：歡迎附加相關圖表、流程圖或示意圖，讓文章更生動易懂
                    </li>
                    <li>可包含好理家在平台的操作截圖（需遮蔽個資）</li>
                    <li>建議加入前後對比的視覺化呈現</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 稿費計算方式 */}
        <Card className="mb-8 border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-green-800">
              <DollarSign className="h-6 w-6 text-green-600" />
              稿費計算方式
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-3 text-green-800">計價標準</h3>
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span>每字稿費</span>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        2元
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>稿費上限</span>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        3,000元
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">以實際文字字數計算，標點符號不列入計費</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3 text-green-800">字數建議</h3>
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">800-1,500字</div>
                    <p className="text-sm text-gray-600">建議文章長度</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 投稿資訊 */}
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-blue-800">
              <Mail className="h-6 w-6 text-blue-600" />
              投稿資訊
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">若有問題請與我們聯繫。</p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium">好理家在財務健檢網聯絡信箱</p>
                  <a href="mailto:service@familyfinhealth.com" className="text-blue-600 hover:underline">
                    service@familyfinhealth.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Facebook className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium">好理家在：好好理財，家才會在官方粉絲團</p>
                  <a
                    href="https://www.facebook.com/profile.php?id=61572528928425&sk=about&locale=zh_TW"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Facebook 粉絲專頁
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
