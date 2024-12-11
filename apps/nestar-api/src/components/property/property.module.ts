import { Module } from '@nestjs/common';
import { PropertyService } from './property.service';
import PropertySchema from '../../schemas/Property.model';
import { AuthModule } from '../auth/auth.module';
import { ViewModule } from '../view/view.module';
import { PropertyResolver } from './property.resolver';
import { MongooseModule } from '@nestjs/mongoose';

@Module({})
@Module({
	imports: [MongooseModule.forFeature([{ name: 'Property', schema: PropertySchema }]), AuthModule, ViewModule],
	providers: [PropertyResolver, PropertyService],
})
export class PropertyModule {}
