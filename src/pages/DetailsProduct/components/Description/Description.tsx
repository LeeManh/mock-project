// import DOMPurify from 'dompurify'

import { DescriptionContent, DescriptionTitle, DescriptionWrap } from './Description.styled'

const Description = () => {
  return (
    <DescriptionWrap>
      <DescriptionTitle>Mô tả sản phẩm</DescriptionTitle>
      <DescriptionContent
      // dangerouslySetInnerHTML={{
      //   __html: DOMPurify.sanitize(product.description)
      // }}
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est minus amet facere magni ab quia vero dolorum
          aliquam. Nihil, amet at porro corrupti quisquam dolor repellendus temporibus asperiores alias sint est debitis
          omnis dignissimos eos distinctio. Eos dolor incidunt quod, quibusdam nostrum tempore quis tempora, hic magni
          quaerat magnam quo reprehenderit! Corporis, ratione! Cupiditate qui consequatur quisquam, nobis distinctio
          optio ut dolor magnam ad voluptatum inventore delectus reiciendis doloremque cumque eos nemo! Sequi excepturi
          ratione exercitationem nulla corporis laboriosam distinctio enim perferendis iusto quod ipsum, facere debitis
          ad dolorem itaque quia eligendi aperiam eos. Animi quia similique aut aliquam! Voluptas?
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est minus amet facere magni ab quia vero dolorum
          aliquam. Nihil, amet at porro corrupti quisquam dolor repellendus temporibus asperiores alias sint est debitis
          omnis dignissimos eos distinctio. Eos dolor incidunt quod, quibusdam nostrum tempore quis tempora, hic magni
          quaerat magnam quo reprehenderit! Corporis, ratione! Cupiditate qui consequatur quisquam, nobis distinctio
          optio ut dolor magnam ad voluptatum inventore delectus reiciendis doloremque cumque eos nemo! Sequi excepturi
          ratione exercitationem nulla corporis laboriosam distinctio enim perferendis iusto quod ipsum, facere debitis
          ad dolorem itaque quia eligendi aperiam eos. Animi quia similique aut aliquam! Voluptas?
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est minus amet facere magni ab quia vero dolorum
          aliquam. Nihil, amet at porro corrupti quisquam dolor repellendus temporibus asperiores alias sint est debitis
          omnis dignissimos eos distinctio. Eos dolor incidunt quod, quibusdam nostrum tempore quis tempora, hic magni
          quaerat magnam quo reprehenderit! Corporis, ratione! Cupiditate qui consequatur quisquam, nobis distinctio
          optio ut dolor magnam ad voluptatum inventore delectus reiciendis doloremque cumque eos nemo! Sequi excepturi
          ratione exercitationem nulla corporis laboriosam distinctio enim perferendis iusto quod ipsum, facere debitis
          ad dolorem itaque quia eligendi aperiam eos. Animi quia similique aut aliquam! Voluptas?
        </div>
      </DescriptionContent>
    </DescriptionWrap>
  )
}

export default Description
