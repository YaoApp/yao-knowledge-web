import {
  HandThumbUpIcon,
  HandThumbDownIcon,
  PaperAirplaneIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";
import { Combobox, Transition } from "@headlessui/react";

export default function Chat() {
  const messages = [];

  return (
    <>
      <div class="container mx-auto rounded-lg w-full bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 h-[80vh] text-gray-300">
        <div class="overflow-auto h-5/6 max-h-5/6">
          <div class="flex justify-between px-6 py-6 bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 rounded-t-lg">
            <div class="flex flex-col">
              <div class="flex flex-row">
                <div class="flex flex-col w-[48] mr-4">
                  <img
                    className="inline-block h-12 w-12 rounded-full ring-2 ring-gray-900"
                    src="https://game.gtimg.cn/images/lol/act/img/champion/Annie.png"
                    alt=""
                  />
                </div>
                <div class="flex flex-col">测试一下这个聊天</div>
              </div>
            </div>
            <div class="flex flex-col w-10"></div>
          </div>

          <div class="flex justify-between px-6 py-6 bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60">
            <div class="flex flex-col">
              <div class="flex flex-row">
                <div class="flex flex-col w-[48] pr-4">
                  <img
                    className="inline-block h-12 w-12 rounded-full ring-2 ring-gray-900"
                    src="/xiang-fav.svg"
                    alt=""
                  />
                </div>
                <div class="flex flex-col">
                  你好！我是ChatGPT，很高兴为你服务。你有什么问题或者想要聊些什么吗？
                </div>
              </div>
            </div>
            <div class="flex flex-col w-10">
              <div class="flex">
                <HandThumbUpIcon
                  className="inline-block cursor-pointer h-4 w-4 mr-2 hover:text-purple-600"
                  aria-hidden="true"
                />
                <HandThumbDownIcon
                  className="inline-block cursor-pointer h-4 w-4 hover:text-purple-600"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>

          <div class="flex justify-between px-6 py-6 bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20">
            <div class="flex flex-col">
              <div class="flex flex-row">
                <div class="flex flex-col w-[48] pr-4">
                  <img
                    className="inline-block h-12 w-12 rounded-full ring-2 ring-gray-900"
                    src="https://game.gtimg.cn/images/lol/act/img/champion/Annie.png"
                    alt=""
                  />
                </div>
                <div class="flex flex-col">帮我写一个关于 AIGC 的应用场景</div>
              </div>
            </div>
            <div class="flex flex-col w-10"></div>
          </div>

          <div class="flex justify-between px-6 py-6 bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60">
            <div class="flex flex-col">
              <div class="flex flex-row">
                <div class="flex flex-col w-[48] pr-4">
                  <img
                    className="inline-block h-12 w-12 rounded-full ring-2 ring-gray-900"
                    src="/xiang-fav.svg"
                    alt=""
                  />
                </div>
                <div class="flex flex-col">
                  <p>
                    当谈到AIGC（人工智能和图形计算）的应用场景时，可以想象到许多不同的情况。以下是几个AIGC的应用场景：
                  </p>
                  <ul>
                    <li>
                      游戏开发：AIGC在游戏开发中发挥了重要作用，因为它可以通过机器学习算法来创建更智能的角色和更复杂的世界。这可以使游戏更加丰富多彩，并提高游戏的乐趣和挑战性。
                    </li>
                    <li>
                      计算机视觉：计算机视觉是AIGC应用的另一个领域，它可以让计算机识别和解释数字图像。这对于识别图像中的物体、人脸识别、自动驾驶车辆、医学图像处理等领域都非常重要。
                    </li>
                    <li>
                      语音和自然语言处理：AIGC在语音和自然语言处理方面也有广泛的应用。例如，机器翻译、语音识别、对话机器人等都可以通过AIGC来实现更准确和自然的处理。
                    </li>
                    <li>
                      医学图像处理：AIGC可以在医学图像处理中使用，例如在MRI扫描中帮助医生更精确地诊断病情，或在X射线图像中发现肿瘤等。
                    </li>
                    <li>
                      工业制造：AIGC可以帮助制造商实现智能化制造，通过机器学习算法来优化生产流程和预测维护需求。
                    </li>
                  </ul>
                  <p>
                    这只是AIGC应用场景的一小部分，未来还将有更多领域的应用。
                  </p>
                </div>
              </div>
            </div>
            <div class="flex flex-col w-10">
              <div class="flex">
                <HandThumbUpIcon
                  className="inline-block cursor-pointer h-4 w-4 mr-2 hover:text-purple-600"
                  aria-hidden="true"
                />
                <HandThumbDownIcon
                  className="inline-block cursor-pointer h-4 w-4 hover:text-purple-600"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>

          <div class="flex justify-between px-6 py-6 bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 rounded-t-lg">
            <div class="flex flex-col">
              <div class="flex flex-row">
                <div class="flex flex-col w-[48] mr-4">
                  <img
                    className="inline-block h-12 w-12 rounded-full ring-2 ring-gray-900"
                    src="https://game.gtimg.cn/images/lol/act/img/champion/Annie.png"
                    alt=""
                  />
                </div>
                <div class="flex flex-col">测试一下这个聊天</div>
              </div>
            </div>
            <div class="flex flex-col w-10"></div>
          </div>

          <div class="flex justify-between px-6 py-6 bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60">
            <div class="flex flex-col">
              <div class="flex flex-row">
                <div class="flex flex-col w-[48] pr-4">
                  <img
                    className="inline-block h-12 w-12 rounded-full ring-2 ring-gray-900"
                    src="/xiang-fav.svg"
                    alt=""
                  />
                </div>
                <div class="flex flex-col">
                  你好！我是ChatGPT，很高兴为你服务。你有什么问题或者想要聊些什么吗？
                </div>
              </div>
            </div>
            <div class="flex flex-col w-10">
              <div class="flex">
                <HandThumbUpIcon
                  className="inline-block cursor-pointer h-4 w-4 mr-2 hover:text-purple-600"
                  aria-hidden="true"
                />
                <HandThumbDownIcon
                  className="inline-block cursor-pointer h-4 w-4 hover:text-purple-600"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>

          <div class="flex justify-between px-6 py-6 bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20">
            <div class="flex flex-col">
              <div class="flex flex-row">
                <div class="flex flex-col w-[48] pr-4">
                  <img
                    className="inline-block h-12 w-12 rounded-full ring-2 ring-gray-900"
                    src="https://game.gtimg.cn/images/lol/act/img/champion/Annie.png"
                    alt=""
                  />
                </div>
                <div class="flex flex-col">帮我写一个关于 AIGC 的应用场景</div>
              </div>
            </div>
            <div class="flex flex-col w-10"></div>
          </div>

          <div class="flex justify-between px-6 py-6 bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60">
            <div class="flex flex-col">
              <div class="flex flex-row">
                <div class="flex flex-col w-[48] pr-4">
                  <img
                    className="inline-block h-12 w-12 rounded-full ring-2 ring-gray-900"
                    src="/xiang-fav.svg"
                    alt=""
                  />
                </div>
                <div class="flex flex-col">
                  <p>
                    当谈到AIGC（人工智能和图形计算）的应用场景时，可以想象到许多不同的情况。以下是几个AIGC的应用场景：
                  </p>
                  <ul>
                    <li>
                      游戏开发：AIGC在游戏开发中发挥了重要作用，因为它可以通过机器学习算法来创建更智能的角色和更复杂的世界。这可以使游戏更加丰富多彩，并提高游戏的乐趣和挑战性。
                    </li>
                    <li>
                      计算机视觉：计算机视觉是AIGC应用的另一个领域，它可以让计算机识别和解释数字图像。这对于识别图像中的物体、人脸识别、自动驾驶车辆、医学图像处理等领域都非常重要。
                    </li>
                    <li>
                      语音和自然语言处理：AIGC在语音和自然语言处理方面也有广泛的应用。例如，机器翻译、语音识别、对话机器人等都可以通过AIGC来实现更准确和自然的处理。
                    </li>
                    <li>
                      医学图像处理：AIGC可以在医学图像处理中使用，例如在MRI扫描中帮助医生更精确地诊断病情，或在X射线图像中发现肿瘤等。
                    </li>
                    <li>
                      工业制造：AIGC可以帮助制造商实现智能化制造，通过机器学习算法来优化生产流程和预测维护需求。
                    </li>
                  </ul>
                  <p>
                    这只是AIGC应用场景的一小部分，未来还将有更多领域的应用。
                  </p>
                </div>
              </div>
            </div>
            <div class="flex flex-col w-10">
              <div class="flex">
                <HandThumbUpIcon
                  className="inline-block cursor-pointer h-4 w-4 mr-2 hover:text-purple-600"
                  aria-hidden="true"
                />
                <HandThumbDownIcon
                  className="inline-block cursor-pointer h-4 w-4 hover:text-purple-600"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Sendbox --> */}
        <div class="relative top-6 text-center">
          <Combobox className="w-auto mx-auto px-2.5 py-2 rounded-md mb-1">
            <Combobox.Button className="border border-gray-700 text-gray-400 text-sm hover:bg-gray-600 active:bg-gray-700 focus:outline-none ">
              <ArrowPathIcon
                className="inline-block h-5 w-5 text-gray-400 mr-1 animate-spin"
                aria-hidden="true"
              />
              数据读取中, 点击暂停...
            </Combobox.Button>
          </Combobox>

          <Combobox className="w-2/3 mx-auto">
            <div className="relative mt-1 ">
              <div className="relative w-full cursor-default overflow-hidden rounded-lg text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                <Combobox.Input
                  className="w-full bg-gray-900 border-none py-2 pl-4 pr-10 text-base leading-5 text-gray-300 h-14 focus:ring-0 focus:outline-none"
                  placeholder="请输入你的问题..."
                />
                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-4">
                  <PaperAirplaneIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </Combobox.Button>
              </div>
            </div>
          </Combobox>
          <div className="w-2/3 mx-auto text-sm text-right text-gray-700 mt-2">
            使用 ctrl/cmd + enter 发送
          </div>
        </div>
      </div>
    </>
  );
}
