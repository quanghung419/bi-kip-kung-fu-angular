import { Injectable } from '@angular/core';
import {TranscriptModel} from './transcript.model';

@Injectable()
export class TranscriptService {

  constructor() { }

  getEnTranscript(): Promise<TranscriptModel> {
    return Promise.resolve(JSON_DATA_EN);
  }

  getVnTranscript(): Promise<TranscriptModel> {
    return Promise.resolve(JSON_DATA_VN);
  }

}

const JSON_DATA_VN = {
  'rawTranscript': 'Louis Pasteur là một trong những nhà khoa học vĩ đại nhất mọi thời đại. Pasteur đã có những phát hiện rất quan trọng về sinh học và hóa học, và những kỹ thuật mà ông khai thác góp phần rất lớn để phát triển y học, nông nghiệp và ngành công nghiệp thực phẩm.\n\nPasteur được sinh ra trong một thị trấn nhỏ ở Pháp vào năm 1822. Khi còn là một chàng trai trẻ, Pasteur học khoa học tại một trường đại học trong thành phố Paris. Ông sớm thực hiện một số nghiên cứu xuất sắc về hóa học, và sau đó bắt đầu sự nghiệp nghiên cứu nổi tiếng của mình về vi trùng.\n\nPasteur là một trong những nhà khoa học đầu tiên biết rằng rất nhiều những bệnh tật có thể bị gây ra do những sinh vật cực kỳ nhỏ và không nhìn thấy được. Chỉ một vài nhà khoa học trước Pasteur tin điều này. Ông khuyên các bác sĩ rửa tay thật kỹ trước khi điều trị cho bệnh nhân.\n\nPasteur cũng chứng minh rằng có những vật thể sống không tự phát sinh. Nghiên cứu của ông cũng chứng minh ý tưởng đã được các nhà khoa học trước đó phát triển rằng một sinh vật sống sẽ không xuất hiện trừ khi những cá thể khác cùng loại với nó tồn tại.\n\nMột trong những đóng góp quan trọng nhất của Pasteur là một phương pháp được đặt tên theo ông: kỹ thuật tiệt trùng theo phương pháp Pasteur. Phương pháp này tiêu diệt những vi trùng được tìm thấy trong đồ uống như sữa hoặc bia. Nhờ có phương pháp của Pasteur, con người không còn bị nhiễm bệnh do uống những đồ uống này.\n\nMột phương pháp cũng quan trọng như phương pháp Pasteur là phương pháp tạo miễn dịch. Pasteur phát hiện ra rằng một con người hoặc con vật có thể được an toàn hoặc miễn dịch khỏi bệnh tật, bằng cách tiêm vào người một số vi trùng yếu gây ra bệnh. Cơ thể có thể chống lại bệnh tật sau khi được miễn dịch bằng cách đó. Ngày nay, nhiều loại bệnh đã được ngăn ngừa bằng cách sử dụng phương pháp này.\n\nNhững phát hiện của Pasteur cũng giúp cứu những người đã bị nhiễm bệnh. Một loại bệnh như vậy là bệnh dại. Bệnh dại là một loại bệnh mà thỉnh thoảng có ở động vật. Loại bệnh này thường gây ra cái chết cho con vật đó, nhưng trước khi chết, con vật đó trở nên hung hăng, và có thể lây lan bênh bằng cách cắn người hoặc những con vật khác.\n\nMột ngày nọ, bố mẹ của một đứa bé trai đến gặp Pasteur. Con trai của họ bị cắn bởi một con cho có bệnh dại. Hai bố mẹ biết rằng con trai của họ sẽ chết vì bệnh dại, trừ khi có thể làm gì đó để cứu con họ. Pasteur đông ý giúp bé trai, và phương pháp miễn dịch đã cứu sống đứa bé.\n\nPasteur qua đời vào năm 1895. Ông được cả thế giới thán phục bởi những thành quả đạt được đã giúp cho toàn nhân loại. Ngày nay, Pasteur được coi là nhân vật vĩ đại nhất trong lịch sử y khoa.',
  'lstPhragraph': [
    {
      'order': 0,
      'rawParagraph': 'Louis Pasteur là một trong những nhà khoa học vĩ đại nhất mọi thời đại. Pasteur đã có những phát hiện rất quan trọng về sinh học và hóa học, và những kỹ thuật mà ông khai thác góp phần rất lớn để phát triển y học, nông nghiệp và ngành công nghiệp thực phẩm.',
      'lstSentences': [
        {
          'order': 0,
          'value': 'Louis Pasteur là một trong những nhà khoa học vĩ đại nhất mọi thời đại. '
        },
        {
          'order': 1,
          'value': 'Pasteur đã có những phát hiện rất quan trọng về sinh học và hóa học, và những kỹ thuật mà ông khai thác góp phần rất lớn để phát triển y học, nông nghiệp và ngành công nghiệp thực phẩm.'
        }
      ]
    },
    {
      'order': 1,
      'rawParagraph': 'Pasteur được sinh ra trong một thị trấn nhỏ ở Pháp vào năm 1822. Khi còn là một chàng trai trẻ, Pasteur học khoa học tại một trường đại học trong thành phố Paris. Ông sớm thực hiện một số nghiên cứu xuất sắc về hóa học, và sau đó bắt đầu sự nghiệp nghiên cứu nổi tiếng của mình về vi trùng.',
      'lstSentences': [
        {
          'order': 0,
          'value': 'Pasteur được sinh ra trong một thị trấn nhỏ ở Pháp vào năm 1822. '
        },
        {
          'order': 1,
          'value': 'Khi còn là một chàng trai trẻ, Pasteur học khoa học tại một trường đại học trong thành phố Paris. '
        },
        {
          'order': 2,
          'value': 'Ông sớm thực hiện một số nghiên cứu xuất sắc về hóa học, và sau đó bắt đầu sự nghiệp nghiên cứu nổi tiếng của mình về vi trùng.'
        }
      ]
    },
    {
      'order': 2,
      'rawParagraph': 'Pasteur là một trong những nhà khoa học đầu tiên biết rằng rất nhiều những bệnh tật có thể bị gây ra do những sinh vật cực kỳ nhỏ và không nhìn thấy được. Chỉ một vài nhà khoa học trước Pasteur tin điều này. Ông khuyên các bác sĩ rửa tay thật kỹ trước khi điều trị cho bệnh nhân.',
      'lstSentences': [
        {
          'order': 0,
          'value': 'Pasteur là một trong những nhà khoa học đầu tiên biết rằng rất nhiều những bệnh tật có thể bị gây ra do những sinh vật cực kỳ nhỏ và không nhìn thấy được. '
        },
        {
          'order': 1,
          'value': 'Chỉ một vài nhà khoa học trước Pasteur tin điều này. '
        },
        {
          'order': 2,
          'value': 'Ông khuyên các bác sĩ rửa tay thật kỹ trước khi điều trị cho bệnh nhân.'
        }
      ]
    },
    {
      'order': 3,
      'rawParagraph': 'Pasteur cũng chứng minh rằng có những vật thể sống không tự phát sinh. Nghiên cứu của ông cũng chứng minh ý tưởng đã được các nhà khoa học trước đó phát triển rằng một sinh vật sống sẽ không xuất hiện trừ khi những cá thể khác cùng loại với nó tồn tại.',
      'lstSentences': [
        {
          'order': 0,
          'value': 'Pasteur cũng chứng minh rằng có những vật thể sống không tự phát sinh. '
        },
        {
          'order': 1,
          'value': 'Nghiên cứu của ông cũng chứng minh ý tưởng đã được các nhà khoa học trước đó phát triển rằng một sinh vật sống sẽ không xuất hiện trừ khi những cá thể khác cùng loại với nó tồn tại.'
        }
      ]
    },
    {
      'order': 4,
      'rawParagraph': 'Một trong những đóng góp quan trọng nhất của Pasteur là một phương pháp được đặt tên theo ông: kỹ thuật tiệt trùng theo phương pháp Pasteur. Phương pháp này tiêu diệt những vi trùng được tìm thấy trong đồ uống như sữa hoặc bia. Nhờ có phương pháp của Pasteur, con người không còn bị nhiễm bệnh do uống những đồ uống này.',
      'lstSentences': [
        {
          'order': 0,
          'value': 'Một trong những đóng góp quan trọng nhất của Pasteur là một phương pháp được đặt tên theo ông: kỹ thuật tiệt trùng theo phương pháp Pasteur. '
        },
        {
          'order': 1,
          'value': 'Phương pháp này tiêu diệt những vi trùng được tìm thấy trong đồ uống như sữa hoặc bia. '
        },
        {
          'order': 2,
          'value': 'Nhờ có phương pháp của Pasteur, con người không còn bị nhiễm bệnh do uống những đồ uống này.'
        }
      ]
    },
    {
      'order': 5,
      'rawParagraph': 'Một phương pháp cũng quan trọng như phương pháp Pasteur là phương pháp tạo miễn dịch. Pasteur phát hiện ra rằng một con người hoặc con vật có thể được an toàn hoặc miễn dịch khỏi bệnh tật, bằng cách tiêm vào người một số vi trùng yếu gây ra bệnh. Cơ thể có thể chống lại bệnh tật sau khi được miễn dịch bằng cách đó. Ngày nay, nhiều loại bệnh đã được ngăn ngừa bằng cách sử dụng phương pháp này.',
      'lstSentences': [
        {
          'order': 0,
          'value': 'Một phương pháp cũng quan trọng như phương pháp Pasteur là phương pháp tạo miễn dịch. '
        },
        {
          'order': 1,
          'value': 'Pasteur phát hiện ra rằng một con người hoặc con vật có thể được an toàn hoặc miễn dịch khỏi bệnh tật, bằng cách tiêm vào người một số vi trùng yếu gây ra bệnh. '
        },
        {
          'order': 2,
          'value': 'Cơ thể có thể chống lại bệnh tật sau khi được miễn dịch bằng cách đó. '
        },
        {
          'order': 3,
          'value': 'Ngày nay, nhiều loại bệnh đã được ngăn ngừa bằng cách sử dụng phương pháp này.'
        }
      ]
    },
    {
      'order': 6,
      'rawParagraph': 'Những phát hiện của Pasteur cũng giúp cứu những người đã bị nhiễm bệnh. Một loại bệnh như vậy là bệnh dại. Bệnh dại là một loại bệnh mà thỉnh thoảng có ở động vật. Loại bệnh này thường gây ra cái chết cho con vật đó, nhưng trước khi chết, con vật đó trở nên hung hăng, và có thể lây lan bênh bằng cách cắn người hoặc những con vật khác.',
      'lstSentences': [
        {
          'order': 0,
          'value': 'Những phát hiện của Pasteur cũng giúp cứu những người đã bị nhiễm bệnh. '
        },
        {
          'order': 1,
          'value': 'Một loại bệnh như vậy là bệnh dại. '
        },
        {
          'order': 2,
          'value': 'Bệnh dại là một loại bệnh mà thỉnh thoảng có ở động vật. '
        },
        {
          'order': 3,
          'value': 'Loại bệnh này thường gây ra cái chết cho con vật đó, nhưng trước khi chết, con vật đó trở nên hung hăng, và có thể lây lan bênh bằng cách cắn người hoặc những con vật khác.'
        }
      ]
    },
    {
      'order': 7,
      'rawParagraph': 'Một ngày nọ, bố mẹ của một đứa bé trai đến gặp Pasteur. Con trai của họ bị cắn bởi một con cho có bệnh dại. Hai bố mẹ biết rằng con trai của họ sẽ chết vì bệnh dại, trừ khi có thể làm gì đó để cứu con họ. Pasteur đông ý giúp bé trai, và phương pháp miễn dịch đã cứu sống đứa bé.',
      'lstSentences': [
        {
          'order': 0,
          'value': 'Một ngày nọ, bố mẹ của một đứa bé trai đến gặp Pasteur. '
        },
        {
          'order': 1,
          'value': 'Con trai của họ bị cắn bởi một con cho có bệnh dại. '
        },
        {
          'order': 2,
          'value': 'Hai bố mẹ biết rằng con trai của họ sẽ chết vì bệnh dại, trừ khi có thể làm gì đó để cứu con họ. '
        },
        {
          'order': 3,
          'value': 'Pasteur đông ý giúp bé trai, và phương pháp miễn dịch đã cứu sống đứa bé.'
        }
      ]
    },
    {
      'order': 8,
      'rawParagraph': 'Pasteur qua đời vào năm 1895. Ông được cả thế giới thán phục bởi những thành quả đạt được đã giúp cho toàn nhân loại. Ngày nay, Pasteur được coi là nhân vật vĩ đại nhất trong lịch sử y khoa.',
      'lstSentences': [
        {
          'order': 0,
          'value': 'Pasteur qua đời vào năm 1895. '
        },
        {
          'order': 1,
          'value': 'Ông được cả thế giới thán phục bởi những thành quả đạt được đã giúp cho toàn nhân loại. '
        },
        {
          'order': 2,
          'value': 'Ngày nay, Pasteur được coi là nhân vật vĩ đại nhất trong lịch sử y khoa.'
        }
      ]
    }
  ]
};


const JSON_DATA_EN = {
  'rawTranscript': 'Louis Pasteur was one of the greatest scientists of all time. Pasteur made very important discoveries in biology and chemistry, and the techniques he developed helped greatly to develop medical science and the agricultural and food industries. \n\nPasteur was born in a small town in France during the year 1822. When he was a young man, Pasteur studied science at a university in the city of Paris. He soon did some excellent work in chemistry, and later began his famous study of germs.\n\nPasteur was one of the first scientists to understand that many diseases could be caused by extremely small, invisible organisms. Only a few other scientists had believed this before Pasteur. He advised doctors to wash their hands thoroughly before treating patients. \n\nPasteur also demonstrated that life forms did not arise spontaneously. His research confirmed the idea, developed by previous scientists, that a living organism would not appear unless other individuals of its kind were present. \n\nOne of Pasteur\'s most important contributions was a technique that has been named after him: pasteurization. Pasteurization kills the germs that are found in drinks such as milk or beer. Because of Pasteur\'s technique, people are no longer infected with diseases by drinking these liquids. \n\nJust as important as pasteurization was a technique called immunization. Pasteur found that a person or animal could be made safe, or immune, from a disease, by injecting the person with some weakened germs that cause the disease. The body can resist the disease after being immunized in this way. Today, many diseases are prevented by the use of this technique. \n\nPasteur\'s discoveries also helped to save people who had already been infected with diseases. One such disease is rabies. Rabies is a disease that sometimes occurs in animals. This disease usually kills the animal, but before dying, the animal becomes very aggressive, and may spread the disease by biting a person or another animal. \n\nOne day, the parents of a young boy came to Pasteur. Their son had been bitten by a dog that had the rabies disease. The parents knew that their son would die from the disease, unless something could be done to save him. Pasteur agreed to help the boy, and the immunization technique saved the boy\'s life. \n\nPasteur died in 1895. He was greatly admired around the world for his achievements, which have helped all of humankind. Today, Pasteur is considered to be the greatest figure in the history of medicine.',
  'lstPhragraph': [
    {
      'order': 0,
      'rawParagraph': 'Louis Pasteur was one of the greatest scientists of all time. Pasteur made very important discoveries in biology and chemistry, and the techniques he developed helped greatly to develop medical science and the agricultural and food industries. ',
      'lstSentences': [
        {
          'order': 0,
          'value': 'Louis Pasteur was one of the greatest scientists of all time. '
        },
        {
          'order': 1,
          'value': 'Pasteur made very important discoveries in biology and chemistry, and the techniques he developed helped greatly to develop medical science and the agricultural and food industries. '
        }
      ]
    },
    {
      'order': 1,
      'rawParagraph': 'Pasteur was born in a small town in France during the year 1822. When he was a young man, Pasteur studied science at a university in the city of Paris. He soon did some excellent work in chemistry, and later began his famous study of germs.',
      'lstSentences': [
        {
          'order': 0,
          'value': 'Pasteur was born in a small town in France during the year 1822. '
        },
        {
          'order': 1,
          'value': 'When he was a young man, Pasteur studied science at a university in the city of Paris. '
        },
        {
          'order': 2,
          'value': 'He soon did some excellent work in chemistry, and later began his famous study of germs.'
        }
      ]
    },
    {
      'order': 2,
      'rawParagraph': 'Pasteur was one of the first scientists to understand that many diseases could be caused by extremely small, invisible organisms. Only a few other scientists had believed this before Pasteur. He advised doctors to wash their hands thoroughly before treating patients. ',
      'lstSentences': [
        {
          'order': 0,
          'value': 'Pasteur was one of the first scientists to understand that many diseases could be caused by extremely small, invisible organisms. '
        },
        {
          'order': 1,
          'value': 'Only a few other scientists had believed this before Pasteur. '
        },
        {
          'order': 2,
          'value': 'He advised doctors to wash their hands thoroughly before treating patients. '
        }
      ]
    },
    {
      'order': 3,
      'rawParagraph': 'Pasteur also demonstrated that life forms did not arise spontaneously. His research confirmed the idea, developed by previous scientists, that a living organism would not appear unless other individuals of its kind were present. ',
      'lstSentences': [
        {
          'order': 0,
          'value': 'Pasteur also demonstrated that life forms did not arise spontaneously. '
        },
        {
          'order': 1,
          'value': 'His research confirmed the idea, developed by previous scientists, that a living organism would not appear unless other individuals of its kind were present. '
        }
      ]
    },
    {
      'order': 4,
      'rawParagraph': 'One of Pasteur\'s most important contributions was a technique that has been named after him: pasteurization. Pasteurization kills the germs that are found in drinks such as milk or beer. Because of Pasteur\'s technique, people are no longer infected with diseases by drinking these liquids. ',
      'lstSentences': [
        {
          'order': 0,
          'value': 'One of Pasteur\'s most important contributions was a technique that has been named after him: pasteurization. '
        },
        {
          'order': 1,
          'value': 'Pasteurization kills the germs that are found in drinks such as milk or beer. '
        },
        {
          'order': 2,
          'value': 'Because of Pasteur\'s technique, people are no longer infected with diseases by drinking these liquids. '
        }
      ]
    },
    {
      'order': 5,
      'rawParagraph': 'Just as important as pasteurization was a technique called immunization. Pasteur found that a person or animal could be made safe, or immune, from a disease, by injecting the person with some weakened germs that cause the disease. The body can resist the disease after being immunized in this way. Today, many diseases are prevented by the use of this technique. ',
      'lstSentences': [
        {
          'order': 0,
          'value': 'Just as important as pasteurization was a technique called immunization. '
        },
        {
          'order': 1,
          'value': 'Pasteur found that a person or animal could be made safe, or immune, from a disease, by injecting the person with some weakened germs that cause the disease. '
        },
        {
          'order': 2,
          'value': 'The body can resist the disease after being immunized in this way. '
        },
        {
          'order': 3,
          'value': 'Today, many diseases are prevented by the use of this technique. '
        }
      ]
    },
    {
      'order': 6,
      'rawParagraph': 'Pasteur\'s discoveries also helped to save people who had already been infected with diseases. One such disease is rabies. Rabies is a disease that sometimes occurs in animals. This disease usually kills the animal, but before dying, the animal becomes very aggressive, and may spread the disease by biting a person or another animal. ',
      'lstSentences': [
        {
          'order': 0,
          'value': 'Pasteur\'s discoveries also helped to save people who had already been infected with diseases. '
        },
        {
          'order': 1,
          'value': 'One such disease is rabies. '
        },
        {
          'order': 2,
          'value': 'Rabies is a disease that sometimes occurs in animals. '
        },
        {
          'order': 3,
          'value': 'This disease usually kills the animal, but before dying, the animal becomes very aggressive, and may spread the disease by biting a person or another animal. '
        }
      ]
    },
    {
      'order': 7,
      'rawParagraph': 'One day, the parents of a young boy came to Pasteur. Their son had been bitten by a dog that had the rabies disease. The parents knew that their son would die from the disease, unless something could be done to save him. Pasteur agreed to help the boy, and the immunization technique saved the boy\'s life. ',
      'lstSentences': [
        {
          'order': 0,
          'value': 'One day, the parents of a young boy came to Pasteur. '
        },
        {
          'order': 1,
          'value': 'Their son had been bitten by a dog that had the rabies disease. '
        },
        {
          'order': 2,
          'value': 'The parents knew that their son would die from the disease, unless something could be done to save him. '
        },
        {
          'order': 3,
          'value': 'Pasteur agreed to help the boy, and the immunization technique saved the boy\'s life. '
        }
      ]
    },
    {
      'order': 8,
      'rawParagraph': 'Pasteur died in 1895. He was greatly admired around the world for his achievements, which have helped all of humankind. Today, Pasteur is considered to be the greatest figure in the history of medicine.',
      'lstSentences': [
        {
          'order': 0,
          'value': 'Pasteur died in 1895. '
        },
        {
          'order': 1,
          'value': 'He was greatly admired around the world for his achievements, which have helped all of humankind. '
        },
        {
          'order': 2,
          'value': 'Today, Pasteur is considered to be the greatest figure in the history of medicine.'
        }
      ]
    }
  ]
};
