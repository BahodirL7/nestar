import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Follower, Following } from '../../libs/dto/follow/follow';
import { InjectModel } from '@nestjs/mongoose';
import { MemberService } from '../member/member.service';

@Injectable()
export class FollowService {
	constructor(
		@InjectModel('Follow') private readonly FollowModel: Model<Follower | Following>,
		private readonly memberService: MemberService,
	) {}
}
