import { BadGatewayException, BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Like } from '../../libs/dto/like/like';
import { LikeInput } from '../../libs/dto/like/like.input';
import { T } from '../../libs/types/common';
import { Message } from '../../libs/enums/common.enum';

@Injectable()
export class LikeService {
	constructor(@InjectModel('Like') private readonly likeModel: Model<Like>) {}

	public async toggleLike(input: LikeInput): Promise<number> {
		const search: T = { memberId: input.memberId, likeRefId: input.likeRefId };
		const existing = await this.likeModel.findOne(search).exec();
		let modifier: number;

		if (existing) {
			await this.likeModel.findOneAndDelete(search).exec();
			modifier = -1; // Unlike
		} else {
			try {
				await this.likeModel.findOneAndUpdate(search, input, { upsert: true, setDefaultsOnInsert: true }).exec();
				modifier = 1; // Like
			} catch (err) {
				console.error('Error, Service.model', err.message);
				throw new BadRequestException(Message.CREATE_FAILED);
			}
		}

		console.log(`- Like modifier ${modifier} -`);
		return modifier;
	}
}
